import { Metadata } from "next";
import OdooLivechat from "@/components/OdooLivechat";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CTO Fraccional y Liderazgo Técnico",
  description: "Acompañamiento directivo continuo para CEOs. Liderazgo técnico sin ataduras de un perfil en plantilla.",
};

export default function CTOFraccionalPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <div className="max-w-3xl mx-auto py-24 px-6">
                <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Volver a inicio</Link>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">CTO Fraccional (Advisory Retainer)</h1>
                
                <div className="prose prose-lg text-slate-700">
                    <p className="lead text-xl mb-6">
                        Liderazgo técnico estratégico para tu empresa, <strong>sin necesidad de atarte a un CTO a tiempo completo en plantilla</strong>.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">¿Por qué un CTO Fraccional?</h2>
                    <p className="mb-4">
                        Muchas empresas necesitan dirección tecnológica de alto nivel, pero no justifican el enorme coste y riesgo operativo de contratar un perfil C-Level a tiempo completo. Otras empresas ya tienen un Lead Developer (o CTO hands-on) pero necesitan un perfil que lo <strong>acompañe, refuerce durante un tiempo de transición o le ofrezca mentoría técnica y de negocio</strong>.
                    </p>
                    <p className="mb-4">
                        Actúo como tu socio estratégico en la mesa directiva. Te guío en la toma de decisiones tecnológicas clave, audito el avance de tu equipo interno y garantizo que la tecnología sirva a los objetivos financieros del negocio.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">El Entregable</h2>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li>Liderazgo y acompañamiento continuo para CEOs.</li>
                        <li>Reuniones estratégicas de seguimiento y priorización.</li>
                        <li>Tranquilidad y cero sorpresas en la fase de producción.</li>
                        <li>Refuerzo y estructuración de equipos técnicos existentes.</li>
                    </ul>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-10">
                        <h3 className="text-lg font-bold text-blue-900 mb-2">Hablemos sobre tus retos de liderazgo</h3>
                        <p className="text-blue-800 mb-4">
                            Usa el chat de la esquina inferior para iniciar el proceso o escríbeme directamente si tienes dudas sobre nuestro encaje.
                        </p>
                    </div>
                </div>
            </div>
            
             {/* Suponemos que el canal 3 es el bot que arranca directo con el CTO funnel, 
                 o por ahora usamos el canal 2 genérico. Dejamos el 3 para demostrar multi-bot. */}
            <OdooLivechat channelId={2} />
        </div>
    );
}
