import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// 1. Cargar las credenciales desde .env.local de forma sencilla
const loadEnv = () => {
    // Para admitir tanto ejecución con mjs como ts-node
    const dir = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
    const envPath = path.resolve(dir, '../.env.local');

    if (fs.existsSync(envPath)) {
        const envFile = fs.readFileSync(envPath, 'utf-8');
        envFile.split('\n').forEach(line => {
            const match = line.match(/^\s*([\w]+)\s*=\s*(.*)?\s*$/);
            if (match) {
                const key = match[1];
                let value = match[2] || '';
                // Limpiar comillas si las tiene
                if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
                process.env[key] = value;
            }
        });
    }
};

loadEnv();

const ODOO_URL = process.env.ODOO_URL?.replace(/\/$/, '') || '';
const ODOO_USER = process.env.ODOO_USER || '';
const ODOO_PASSWORD = process.env.ODOO_PASSWORD || '';
// Odoo SIEMPRE necesita la Base de Datos para comunicarse por JSON-RPC.
// Si no la tienes en el .env, por defecto intentará usar el string antes del .rimamo.dev 
// o simplemente usaremos un nombre de base de datos estático, configúralo aquí:
const ODOO_DB = process.env.ODOO_DB || 'rimamodev';

if (!ODOO_URL || !ODOO_USER || !ODOO_PASSWORD) {
    console.error("❌ Faltan credenciales (ODOO_URL, ODOO_USER, ODOO_PASSWORD) en .env.local.");
    process.exit(1);
}

// Variables globales para la sesión de Odoo
let sessionId = '';

/**
 * Función base para hacer llamadas JSON-RPC a Odoo
 */
async function odooJsonRpc(endpoint: string, params: any) {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };
    if (sessionId) {
        headers['Cookie'] = `session_id=${sessionId}`;
    }

    const response = await fetch(`${ODOO_URL}${endpoint}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'call',
            params: params,
            id: new Date().getTime()
        })
    });

    // Guardar cookie de sesión en la autenticación
    if (endpoint === '/web/session/authenticate') {
        const cookie = response.headers.get('set-cookie');
        if (cookie) {
            const match = cookie.match(/session_id=([^;]+)/);
            if (match) sessionId = match[1];
        }
    }

    const result = await response.json();
    if (result.error) {
        throw new Error(`Odoo API Error: ${JSON.stringify(result.error.data || result.error)}`);
    }
    return result.result;
}

/**
 * Autenticación en Odoo
 */
async function authenticate() {
    console.log(`⏳ Autenticando en Odoo (${ODOO_URL}) como ${ODOO_USER}...`);
    const result = await odooJsonRpc('/web/session/authenticate', {
        db: ODOO_DB,
        login: ODOO_USER,
        password: ODOO_PASSWORD
    });

    if (!result || !result.uid) {
        throw new Error("Autenticación fallida. Revisa las credenciales o el nombre de la BD.");
    }
    console.log(`✅ Autenticado exitosamente. UID: ${result.uid}`);
    return result.uid;
}

/**
 * Llama a métodos de modelos específicos de Odoo (create, write, search, etc.)
 */
async function callKw(model: string, method: string, args: any[], kwargs: any = {}) {
    return await odooJsonRpc('/web/dataset/call_kw', {
        model: model,
        method: method,
        args: args,
        kwargs: kwargs
    });
}

/**
 * Función Principal de Configuración del Chatbot
 */
async function setupChatbot() {
    try {
        await authenticate();
        console.log("🛠️  Creando Bot de Filtro rimamo.dev...");

        const scriptId = await callKw('chatbot.script', 'create', [{
            title: 'Filtro Estratégico Rimamo.dev',
            active: true
        }]);
        console.log(`✅ Script del Chatbot creado con ID: ${scriptId}`);

        const URL_AUDITORIA = 'https://cal.com/rimamo/auditoria-ecosistema';
        const URL_OPERACIONES = 'https://cal.com/rimamo/operaciones-eficiencia';
        const URL_CTO = 'https://cal.com/rimamo/cto-fraccional';
        const URL_AGENCIA = 'https://friendstech.dev';

        // 1. Crear el mensaje inicial (El filtro)
        console.log("🛠️  Creando la pregunta filtro inicial...");
        const initialQuestionId = await callKw('chatbot.script.step', 'create', [{
            chatbot_script_id: scriptId,
            step_type: 'question_selection',
            message: 'Hola. ¿Cuál es el mayor dolor de cabeza tecnológico o de procesos en tu empresa a día de hoy?'
        }]);

        // 2. Crear las Respuestas (Opciones) vinculadas a la pregunta inicial
        console.log("🛠️  Creando opciones de respuesta...");
        const ansOperacionesId = await callKw('chatbot.script.answer', 'create', [{
            script_step_id: initialQuestionId,
            name: "1️⃣ Mis procesos son lentos y mi equipo está en caos."
        }]);
        const ansAuditoriaId = await callKw('chatbot.script.answer', 'create', [{
            script_step_id: initialQuestionId,
            name: "2️⃣ Mis gastos en SaaS y licencias están fuera de control."
        }]);
        const ansCtoId = await callKw('chatbot.script.answer', 'create', [{
            script_step_id: initialQuestionId,
            name: "3️⃣ Me falta liderazgo técnico claro en mi empresa."
        }]);
        const ansAgenciaId = await callKw('chatbot.script.answer', 'create', [{
            script_step_id: initialQuestionId,
            name: "4️⃣ Solo quiero desarrollar software / apps a medida."
        }]);

        // 3. Crear los pasos de respuesta enlazados por "triggering_answer_ids"
        console.log("🛠️  Creando mensajes de redirección ligados a las opciones...");

        await callKw('chatbot.script.step', 'create', [{
            chatbot_script_id: scriptId,
            step_type: 'text',
            triggering_answer_ids: [[6, 0, [ansAuditoriaId]]],
            message: `Para frenar ese gasto descontrolado y unificar tus sistemas, realizaremos una Auditoría de Ecosistema. 📅 Agenda tu consultoría aquí: <a href="${URL_AUDITORIA}" target="_blank">Agendar Auditoría</a>`
        }]);

        await callKw('chatbot.script.step', 'create', [{
            chatbot_script_id: scriptId,
            step_type: 'text',
            triggering_answer_ids: [[6, 0, [ansOperacionesId]]],
            message: `Tenemos que reestructurar tus flujos de trabajo. Hablaremos sobre cómo optimizar la eficiencia de tu equipo. 📅 Elige tu horario aquí: <a href="${URL_OPERACIONES}" target="_blank">Agendar Consultoría</a>`
        }]);

        await callKw('chatbot.script.step', 'create', [{
            chatbot_script_id: scriptId,
            step_type: 'text',
            triggering_answer_ids: [[6, 0, [ansCtoId]]],
            message: `Entendido. Te acompañaré estratégicamente para alinear tu tecnología con tu rentabilidad. 📅 Hablemos: <a href="${URL_CTO}" target="_blank">Agendar Discovery CTO</a>`
        }]);

        await callKw('chatbot.script.step', 'create', [{
            chatbot_script_id: scriptId,
            step_type: 'text',
            triggering_answer_ids: [[6, 0, [ansAgenciaId]]],
            message: `Para desarrollo a medida, integraciones y soporte, nuestro equipo de ejecución es quien se encarga. 👉 Redirígete a nuestra agencia aquí: <a href="${URL_AGENCIA}" target="_blank">friendstech.dev</a>. ¡Allí estaremos encantados de construirlo!`
        }]);

        console.log("✅ Árbol de opciones creado con éxito y vinculado a la pregunta inicial.");
        console.log("\n🚀 ¡CHATBOT DESPLEGADO CON ÉXITO!");
        console.log("Recuerda asignar este Chatbot Script a tu Canal de Livechat desde la interfaz administrativa de Odoo (Live Chat > Channels).");

    } catch (err) {
        console.error("❌ Ocurrió un error en la configuración:", err);
    }
}

// Ejecutar script
setupChatbot();
