# Rimamo.dev — Marca personal de Ricardo Martínez

## Propósito

Hub comercial de Ricardo Martínez. La SL que factura. Vende servicios tech al mercado.

> Lee `../CLAUDE.md` para contexto del workspace y `../spec-rimamo-v1.md` para el PRD completo.

## Posicionamiento (1 frase)

> "Ricardo Martínez, 16 años construyendo tecnología. Ayudo a empresas y emprendedores a mover la parte técnica sin contratar a tiempo completo."

## Verticales de servicio (P0 en spec)

1. **Tech Lead / CTO fraccional** — horas semanales, paquetes.
2. **Automatizaciones & IA operativa** — procesos internos, integraciones, Odoo.
3. **Prototipado y MVP** — apoyo en colaboradores del laboratorio (Friendstec).
4. **Diseño & UX** — operado por Sonia, facturado por Rimamo (opaco al cliente).

## Stack

- Next.js 14 App Router + TypeScript estricto
- TailwindCSS
- react-icons
- Desplegado en Vercel (via GitHub Pages actualmente — evaluar migración)

## Estructura actual

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx           # Home (solo perfil actualmente)
│   ├── ProfileCard.tsx
│   ├── servicios/         # Página de servicios
│   ├── sitemap.ts
│   └── robots.ts
└── components/
    └── OdooLivechat.tsx   # Livechat Odoo integrado
```

**Estado actual**: landing mínima. Sin blog. Sin verticales desarrollados.

## Qué hay que construir (P0)

- [ ] Home con hero + 4 verticales + CTA "Hablemos"
- [ ] Página por vertical con paquetes de precios
- [ ] Página "Sobre mí"
- [ ] Blog (consume CMS cuando esté listo)
- [ ] Página de contacto con integración calendario
- [ ] Footer con enlace a friendstech.dev
- [ ] SEO completo (og, sitemap, schema)

## Convenciones específicas

- El tono de la home es **profesional, directo, senior**. Nada de marketing inflado.
- CTAs claros: "Hablemos", "Reservar llamada". Nunca "¡Compra ya!".
- Precios públicos cuando sea posible — reduce fricción comercial.
- Foto profesional, no stock. No emojis en copy de landing.
- Prueba social: logos o casos reales, nunca inventados.

## Reglas del ecosistema aplicadas aquí

- Este repo **sí factura** → formularios de contacto comercial activos.
- Menciona a Friendstec como "laboratorio donde experimento", no como "mi equipo".
- Nunca afirma que hay equipo a tiempo completo — solo colaboradores puntuales.

## Testing

- Todo cambio de copy en home/verticales pasa por `brand-check` antes de merge.
- Test de SEO con Lighthouse antes de cada deploy a producción.

## Preguntas abiertas

- ¿Seguir en GitHub Pages o migrar a Vercel (recomendado por stack)?
- ¿Conectar Cal.com o Calendly para llamadas de descubrimiento?
- ¿CMS Payload accesible desde aquí vía API o copiar SDK?
