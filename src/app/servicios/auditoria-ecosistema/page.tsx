import { Metadata } from "next";
import OdooLivechat from "@/components/OdooLivechat";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Auditoría de Ecosistema Tecnológico",
  description: "Detectamos gastos innecesarios, licencias duplicadas y fallos de seguridad. Reduce tus costes de SaaS.",
};

export default function AuditoriaPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <div className="max-w-3xl mx-auto py-24 px-6">
                <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Volver a inicio</Link>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">Auditoría de Ecosistema Tecnológico</h1>
                
                <div className="prose prose-lg text-slate-700">
                    <p className="lead text-xl mb-6">
                        Reduce el agujero negro de costes en herramientas SaaS mal interconectadas.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">El Problema de la Fragmentación</h2>
                    <p className="mb-4">
                        Gran parte de las empresas de hoy en día pagan decenas de licencias por herramientas increíbles (CRMs, ERPs, automatizaciones) pero sus empleados siguen trabajando con Excel o copiando datos de una pantalla a otra.
                    </p>
                    <p className="mb-4">
                        En este servicio analizo a fondo tu infraestructura actual, descubro qué herramientas están sobrando, dónde recorta seguridad tu entorno y qué sistemas deberían comunicarse pero no lo hacen.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">El Entregable</h2>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li>Informe detallado de licencias redundantes o infrautilizadas.</li>
                        <li>Mapa de ecosistema digital optimizado.</li>
                        <li>Roadmap técnico accionable con estimación de ahorro financiero.</li>
                    </ul>
                </div>
            </div>
            <OdooLivechat channelId={2} />
        </div>
    );
}
