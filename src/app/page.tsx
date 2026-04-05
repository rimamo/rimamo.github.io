import ProfileCard from "@/app/ProfileCard";
import OdooLivechat from "@/components/OdooLivechat";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100">
            {/* Hero Section */}
            <header className="relative overflow-hidden bg-slate-50 pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32 px-6">
                <div className="mx-auto max-w-7xl text-center">
                    <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">
                        Estrategia Tecnológica y Operativa para CEOs y Managers
                    </p>
                    <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
                        Deja de perder dinero en software desalineado.
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
                        Transformo el caos operativo y tecnológico de tu empresa en sistemas eficientes, escalables y rentables. Tú te enfocas en el negocio; yo me encargo de la arquitectura, los procesos y el liderazgo técnico.
                    </p>
                    <div className="mt-10 flex justify-center gap-x-6">
                         {/* This button could trigger the bot or go to calendar */}
                        <a href="#contacto" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-all">
                            Hablemos sobre tu empresa &rarr;
                        </a>
                    </div>
                </div>
            </header>

            {/* Agitación de Problemas */}
            <section className="py-24 sm:py-32 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            ¿Tu tecnología acelera tu crecimiento o es tu mayor cuello de botella?
                        </h2>
                    </div>
                    <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-8 sm:grid-cols-3">
                        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">💸 El agujero negro del SaaS</h3>
                            <p className="text-slate-600">¿Pagas decenas de licencias (ERP, CRM) pero tu equipo sigue en Excel? Estás tirando dinero por infraestructura mal conectada.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">⏳ El equipo quemado</h3>
                            <p className="text-slate-600">Tareas que deberían tomar minutos tardan horas. El talento se desperdicia en trabajo repetitivo y manual altamente propenso a errores.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">🧭 El barco a la deriva</h3>
                            <p className="text-slate-600">Tienes programadores pero nadie que los dirija con visión estratégica alineando tecnología y rentabilidad.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Servicios Silhouette */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-16 max-w-3xl">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">3 formas de devolverle el control y rentabilidad tecnológica a tu empresa</h2>
                        <p className="mt-4 text-lg text-slate-300">No necesitas más líneas de código, necesitas a alguien audite, dirija y eficientice.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Auditoría de Ecosistema</h3>
                            <p className="text-slate-400 mb-4">Analizo a fondo tu infraestructura. Detecto gastos innecesarios, licencias duplicadas y vulnerabilidades.</p>
                            <Link href="/servicios/auditoria-ecosistema" className="text-blue-400 font-semibold hover:text-blue-300">Ver detalles &rarr;</Link>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Consultoría de Operaciones</h3>
                            <p className="text-slate-400 mb-4">Mapeamos cuellos de botella y diseñamos flujos de trabajo automatizados para multiplicar la eficiencia de tu equipo.</p>
                            <Link href="/servicios/consultoria-operaciones" className="text-blue-400 font-semibold hover:text-blue-300">Ver detalles &rarr;</Link>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">CTO Fraccional</h3>
                            <p className="text-slate-400 mb-4">Liderazgo técnico de alto nivel. Acompañamiento directivo continuo sin asumir el coste ni las ataduras de un CTO en plantilla a tiempo completo.</p>
                            <Link href="/servicios/cto-fraccional" className="text-blue-400 font-semibold hover:text-blue-300">Ver detalles &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profile Context */}
            <section id="contacto" className="py-24 bg-white flex flex-col items-center">
                <div className="text-center max-w-2xl px-6 mb-12">
                     <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Soy el "Cerebro", y delego a mis "Manos"</h2>
                     <p className="text-slate-600">
                         Si tras auditarte determino que necesitas desarrollo a medida, guío su ejecución a través de mi agencia técnica especializada (<b>friendstech.dev</b>). Calidad técnica total, sin carga operativa para ti.
                     </p>
                </div>
                <div className="scale-90 md:scale-100">
                     <ProfileCard />
                </div>
                <p className="mt-8 text-sm text-slate-500">¿Dudas? Haz clic en la burbuja de chat abajo a la derecha y te guiaré hacia la mejor solución.</p>
            </section>

            {/* Inyección del Bot de Odoo Específico (Canal 2 = Bot Principal) */}
            <OdooLivechat channelId={2} />
        </div>
    );
}
