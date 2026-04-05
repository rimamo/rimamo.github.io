import { Metadata } from "next";
import OdooLivechat from "@/components/OdooLivechat";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultoría de Operaciones y Eficiencia",
  description: "Entrevistas 1 a 1 y diseño de flujos de trabajo automatizados para eliminar tareas manuales.",
};

export default function OperacionesPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <div className="max-w-3xl mx-auto py-24 px-6">
                <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Volver a inicio</Link>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">Consultoría de Operaciones y Eficiencia de Equipo</h1>
                
                <div className="prose prose-lg text-slate-700">
                    <p className="lead text-xl mb-6">
                        Para equipos saturados por el caos de información, Slack sin fin y el trabajo manual repetitivo.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Mapeando el caos</h2>
                    <p className="mb-4">
                        Muchas veces el problema no es la tecnología, sino el proceso. Los empleados gastan casi la mitad de su jornada laboral buscando información, cruzando datos de aplicaciones desconectadas e intentando organizar tareas mediante mensajes.
                    </p>
                    <p className="mb-4">
                        En esta consultoría, me sumerjo en el día a día de tu equipo. A través de entrevistas individuales, descubro qué es lo que realmente los retrasa, dónde hay fallos de comunicación y qué procesos son totalmente automatizables.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">El Entregable</h2>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li>Análisis de puntos de dolor por departamento.</li>
                        <li>Identificación de procesos manuales críticos.</li>
                        <li>Diseño arquitectónico de flujos de trabajo eficientes y automatizables.</li>
                    </ul>
                </div>
            </div>
            <OdooLivechat channelId={2} />
        </div>
    );
}
