/* ============================================================
   ARMONIA MUSIC — Lógica de Catálogo y Experiencia Web
   EDITA ESTA SECCIÓN para actualizar teléfonos, productos,
   marcas, sucursales y preguntas frecuentes sin tocar el código.
   ============================================================ */

/* ---------- 1) DATOS DE CONTACTO (EDITA AQUÍ) ---------- */
const WA_NUMERO = "50589379316"; // WhatsApp oficial (botón de la página de Facebook)
const TELEFONO = "+505 8937 9316";
const CORREO = "contacto@armonia.com";
const SITE_URL = "https://armoniamusic.github.io/armonia-web"; // cambia al dominio propio

// Redes sociales oficiales
const FACEBOOK_URL = "https://www.facebook.com/armoniamusicleon";
const INSTAGRAM_URL = "https://www.instagram.com/armoniamusic/";

/* ---------- 2) CATÁLOGO DE PRODUCTOS (EDITA AQUÍ) ---------- */
const PRODUCTOS = [
    {
        id: 1,
        slug: "yamaha-c40",
        precioUsd: 165,
        marca: "Yamaha",
        nombre: "Guitarra acústica C40",
        categoria: "Cuerdas",
        descripcion:
            'Clásica 4/4 de 39". La favorita indiscutible para aprender con gran resonancia y maderas seleccionadas.',
        icono: "🎸",
        foto: "fotos/yamaha-c40.jpg",
        destacado: true,
        specs: {
            material: "Tapa de abeto, aros y fondo de meranti",
            incluye: "Guitarra calibrada e inspección de tienda",
            nivel: "Iniciación y academias",
            garantia: "1 año de garantía oficial",
        },
    },
    {
        id: 2,
        slug: "palmer-les-paul",
        precioUsd: 220,
        marca: "Palmer",
        nombre: "Guitarra eléctrica estilo Les Paul",
        categoria: "Cuerdas",
        descripcion:
            "Acabado clásico con cápsulas humbucker, sustain prolongado e ideal para rock, blues y alabanza.",
        icono: "🎸",
        foto: "fotos/guitarra-palmer.png",
        destacado: true,
        specs: {
            material: "Cuerpo sólido, mástil de arce atornillado",
            incluye: "Cable de conexión y llaves de ajuste",
            nivel: "Intermedio y escenario",
            garantia: "Garantía de respaldo Armonía",
        },
    },
    {
        id: 3,
        slug: "ibanez-gsr180",
        precioUsd: 280,
        marca: "Ibanez",
        nombre: "Bajo eléctrico GSR180 de 4 cuerdas",
        categoria: "Cuerdas",
        descripcion:
            "Mástil delgado sumamente cómodo, versátil para cualquier género y con gran presencia en graves.",
        icono: "🎸",
        foto: "fotos/ibanez-gsr180.jpg",
        destacado: false,
        specs: {
            material: "Cuerpo de okoume, diapasón de purpleheart",
            incluye: "Pastillas pasivas J-style y cable",
            nivel: "Estudiantes y agrupaciones",
            garantia: "Garantía de tienda oficial",
        },
    },
    {
        id: 4,
        slug: "ukelele-palmer",
        precioUsd: 85,
        marca: "Palmer",
        nombre: "Ukelele soprano electroacústico",
        categoria: "Cuerdas",
        descripcion:
            "Cuerpo resonante con salida para amplificador y ecualizador incorporado. Incluye funda de transporte.",
        icono: "🪕",
        foto: "fotos/ukelele-palmer.jpg",
        destacado: false,
        specs: {
            material: "Cuerpo de caoba laminada",
            incluye: "Funda de lona acolchada",
            nivel: "Todos los niveles",
            garantia: "Garantía de tienda oficial",
        },
    },
    {
        id: 5,
        slug: "violin-latina",
        precioUsd: 140,
        marca: "Latina",
        nombre: "Violín acústico 4/4",
        categoria: "Cuerdas",
        descripcion:
            "Acabado satinado natural. Incluye arco de madera, resina premium y estuche rígido reforzado.",
        icono: "🎻",
        foto: "fotos/violin-latina.png",
        destacado: false,
        specs: {
            material: "Abeto y arce con clavijas de ébano",
            incluye: "Estuche rígido triangular, arco y resina",
            nivel: "Principiante a intermedio",
            garantia: "Garantía de tienda oficial",
        },
    },
    {
        id: 6,
        slug: "yamaha-psre273",
        precioUsd: 195,
        marca: "Yamaha",
        nombre: "Teclado PSR-E273 de 5 octavas",
        categoria: "Teclas",
        descripcion:
            "Cientos de voces realistas, ritmos de acompañamiento, modo lección interactivo y entrada auxiliar.",
        icono: "🎹",
        foto: "fotos/yamaha-psre273.jpg",
        destacado: true,
        specs: {
            material: "61 teclas de tamaño estándar",
            incluye: "Atril de partituras y adaptador original",
            nivel: "Iniciación y educación musical",
            garantia: "1 año de garantía oficial",
        },
    },
    {
        id: 7,
        slug: "bateria-shadow",
        precioUsd: 420,
        marca: "Shadow Ranger",
        nombre: "Batería acústica de 5 piezas",
        categoria: "Percusión",
        descripcion:
            "Set completo listo para el escenario: incluye bombo, toms, tarola, platillos básicos, herrajes y sillín.",
        icono: "🥁",
        foto: "fotos/bateria-shadow.jpg",
        destacado: true,
        specs: {
            material: "Vasos de álamo seleccionados de 6 capas",
            incluye: "Platillos hi-hat/crash, baquetas y sillín",
            nivel: "Intermedio y bandas",
            garantia: "Garantía en herrajes y madera",
        },
    },
    {
        id: 8,
        slug: "congas-5d2",
        precioUsd: 310,
        marca: "5D2",
        nombre: 'Set de congas premium 10" y 11" con stand',
        categoria: "Percusión",
        descripcion:
            "Cuerpo de madera selecta, parches de cuero natural y soporte metálico ajustable de alta resistencia.",
        icono: "🪘",
        foto: "fotos/congas-5d2.jpg",
        destacado: false,
        specs: {
            material: "Roble siam con aros reforzados",
            incluye: "Soporte doble tipo canasta y llave",
            nivel: "Músicos latinos e iglesias",
            garantia: "Garantía de tienda oficial",
        },
    },
    {
        id: 9,
        slug: "bongo-5d2",
        precioUsd: 95,
        marca: "5D2",
        nombre: 'Set de bongó de madera 6.5" y 7.5"',
        categoria: "Percusión",
        descripcion:
            "Sonido cálido, respuesta percusiva seca y aros tradicionales con afinación de alta precisión.",
        icono: "🪘",
        foto: "fotos/bongo-5d2.png",
        destacado: false,
        specs: {
            material: "Madera laminada con parches de cuero",
            incluye: "Llave de afinación",
            nivel: "Todos los niveles",
            garantia: "Garantía de tienda oficial",
        },
    },
    {
        id: 10,
        slug: "timbales-maxtone",
        precioUsd: 240,
        marca: "Maxtone",
        nombre: 'Set de timbales 13" y 14"',
        categoria: "Percusión",
        descripcion:
            "Acabado niquelado de alta durabilidad, soporte de timbales y campana/cencerro con baquetas incluidas.",
        icono: "🥁",
        foto: "fotos/timbales-maxtone.jpg",
        destacado: false,
        specs: {
            material: "Cascos de acero niquelado",
            incluye: "Pedestal, campana (cowbell) y baquetas",
            nivel: "Salsa, cumbia y música tropical",
            garantia: "Garantía de tienda oficial",
        },
    },
    {
        id: 11,
        slug: "acordeon-latina",
        precioUsd: 380,
        marca: "Latina",
        nombre: "Acordeón de 32 teclas y 32 bajos",
        categoria: "Viento",
        descripcion:
            "Configuración con 5 registros versátiles. Ideal para música tradicional, norteña y grupos en vivo.",
        icono: "🪗",
        foto: "fotos/acordeon-latina.jpg",
        destacado: true,
        specs: {
            material: "Fuelle reforzado con esquineros metálicos",
            incluye: "Correas acolchadas y estuche duro",
            nivel: "Intermedio y grupos folclóricos",
            garantia: "Garantía de tienda oficial",
        },
    },
    {
        id: 12,
        slug: "saxofon-alto",
        precioUsd: 360,
        marca: "Lyonel",
        nombre: "Saxofón alto negro-dorado con estuche",
        categoria: "Viento",
        descripcion:
            "Resonancia potente, afinación en Mi♭ y un acabado visual elegante. Incluye boquilla y correas.",
        icono: "🎷",
        foto: "fotos/saxofon-alto.jpg",
        destacado: false,
        specs: {
            material: "Latón acústico con zapatillas de cuero",
            incluye: "Estuche semi-rígido, boquilla y caña",
            nivel: "Estudiantes y bandas sinfónicas",
            garantia: "Garantía de tienda oficial",
        },
    },
    {
        id: 13,
        slug: "trompeta-lyonel",
        precioUsd: 210,
        marca: "Lyonel",
        nombre: "Trompeta dorada en Si♭",
        categoria: "Viento",
        descripcion:
            "Pistones de acción suave, campana con gran proyección, boquilla 7C y estuche rígido protector.",
        icono: "🎺",
        foto: "fotos/trompeta-lyonel.jpg",
        destacado: false,
        specs: {
            material: "Cuerpo de latón con laca dorada",
            incluye: "Boquilla estándar 7C y estuche",
            nivel: "Bandas, mariachi e iniciación",
            garantia: "Garantía de tienda oficial",
        },
    },
    {
        id: 14,
        slug: "behringer-xm8500",
        precioUsd: 45,
        marca: "Behringer",
        nombre: "Micrófono dinámico cardioide XM8500",
        categoria: "Audio",
        descripcion:
            "Patrón polar cardioide para voz en vivo, excelente rechazo al feedback y construcción metálica robusta.",
        icono: "🎤",
        foto: "fotos/behringer-xm8500.jpg",
        destacado: false,
        specs: {
            material: "Cuerpo metálico fundido con filtro pop",
            incluye: "Clip de montaje y estuche plástico duro",
            nivel: "Voz en vivo, conferencias e iglesias",
            garantia: "Garantía de tienda oficial",
        },
    },
    {
        id: 15,
        slug: "parlante-kohlt",
        precioUsd: 280,
        marca: "Kohlt",
        nombre: 'Parlante activo 15" KMAS15A',
        categoria: "Audio",
        descripcion:
            "Potencia para eventos, iglesias, conferencias y ensayos. Conexión Bluetooth, reproductor USB y entradas XLR.",
        icono: "🔊",
        foto: "fotos/parlante-kohlt.png",
        destacado: true,
        specs: {
            material: "Gabinete reforzado de alta densidad",
            incluye: "Control remoto y cable de alimentación",
            nivel: "Sonorización profesional y eventos",
            garantia: "Garantía oficial Armonía",
        },
    },
    {
        id: 16,
        slug: "orange-crush12",
        precioUsd: 129,
        marca: "Orange",
        nombre: "Amplificador de guitarra Crush 12",
        categoria: "Audio",
        descripcion:
            '12 watts de potencia análoga con bocina Voice of the World de 6". Distorsión y tono británico clásico.',
        icono: "🔊",
        foto: "fotos/orange-crush12.jpg",
        destacado: false,
        specs: {
            material: "Chasis cerrado tolex naranja icónico",
            incluye: "Salida para audífonos con simulación CabSim",
            nivel: "Práctica casera y grabaciones de estudio",
            garantia: "Garantía oficial Armonía",
        },
    },
    {
        id: 17,
        slug: "fender-stratocaster",
        precioUsd: 850,
        foto: "fotos/fender-stratocaster.jpg",
        marca: "Fender",
        nombre: "Guitarra eléctrica Stratocaster Player",
        categoria: "Cuerdas",
        descripcion:
            "Cuerpo de aliso, 3 pastillas single-coil Alnico 5 y el legendario tono brillante e icónico que define el sonido de la música moderna.",
        icono: "🎸",
        destacado: true,
        specs: {
            material: "Cuerpo de aliso con mástil de arce moderno en C",
            incluye: "Llaves de calibración y certificado de autenticidad",
            nivel: "Profesional y músicos de escenario",
            garantia: "Garantía oficial Armonía",
        },
    },
    {
        id: 18,
        slug: "shure-sm58",
        precioUsd: 119,
        foto: "fotos/shure-sm58.jpg",
        marca: "Shure",
        nombre: "Micrófono vocal profesional SM58",
        categoria: "Audio",
        descripcion:
            "El estándar mundial de los escenarios para voces en vivo. Rejilla esférica de acero reforzada y patrón polar cardioide de máxima fidelidad.",
        icono: "🎤",
        destacado: true,
        specs: {
            material: "Cuerpo esmaltado fundido a presión de alta resistencia",
            incluye: "Funda de transporte y clip de montaje para atril",
            nivel: "Cantantes, iglesias y agrupaciones en vivo",
            garantia: "Garantía oficial Shure",
        },
    },
    {
        id: 19,
        slug: "boss-katana-50",
        precioUsd: 320,
        foto: "fotos/boss-katana-50.jpg",
        marca: "Boss",
        nombre: "Amplificador de guitarra Katana-50 Gen 3",
        categoria: "Audio",
        descripcion:
            '50 watts de potencia con altavoz personalizado de 12", 6 caracteres de amplificador y más de 60 efectos legendarios Boss integrados.',
        icono: "🔊",
        destacado: true,
        specs: {
            material: "Gabinete acústico reforzado con selector de potencia (0.5W/25W/50W)",
            incluye: "Cable de corriente y conexión para software Boss Tone Studio",
            nivel: "Ensayos, conciertos y grabación",
            garantia: "Garantía oficial Boss",
        },
    },
    {
        id: 20,
        slug: "casio-cts300",
        precioUsd: 175,
        foto: "fotos/casio-cts300.jpg",
        marca: "Casio",
        nombre: "Teclado sensitivo Casiotone CT-S300",
        categoria: "Teclas",
        descripcion:
            "61 teclas estilo piano con respuesta al tacto, rueda de inflexión de tono (pitch bend), 400 sonidos y compatibilidad con Chordana Play.",
        icono: "🎹",
        destacado: false,
        specs: {
            material: "Diseño ultraportátil con manija integrada",
            incluye: "Atril de partituras y adaptador de corriente original",
            nivel: "Estudiantes y músicos móviles",
            garantia: "Garantía oficial Casio",
        },
    },
    {
        id: 21,
        slug: "marshall-mg15",
        precioUsd: 119,
        foto: "fotos/marshall-mg15.jpg",
        marca: "Marshall",
        nombre: "Amplificador de guitarra MG15 Gold",
        categoria: "Audio",
        descripcion:
            '15 watts con bocina custom de 8", dos canales (limpio y distorsión crunch) con el clásico rugido británico y panel dorado característico.',
        icono: "🔊",
        destacado: false,
        specs: {
            material: "Chasis tolex con bordes protegidos y panel dorado Gold Series",
            incluye: "Salida emulada para audífonos y entrada auxiliar para pistas",
            nivel: "Práctica casera y estudio",
            garantia: "Garantía oficial Marshall",
        },
    },
];

/* ---------- 3) MARCAS (EDITA AQUÍ) ---------- */
const MARCAS = [
    { nombre: "Yamaha", logo: "logos/yamaha.png" },
    { nombre: "Fender", logo: "logos/fender.svg" },
    { nombre: "Ibanez", logo: "logos/ibanez.png" },
    { nombre: "Shure", logo: "logos/shure.svg" },
    { nombre: "Gibson", logo: "logos/gibson.svg" },
    { nombre: "Roland", logo: "logos/roland.svg" },
    { nombre: "Boss", logo: "logos/boss.svg" },
    { nombre: "Marshall", logo: "logos/marshall.svg" },
    { nombre: "Behringer", logo: "logos/behringer.png" },
    { nombre: "Orange", logo: "logos/orange.png" },
    { nombre: "Casio", logo: "logos/casio.svg" },
    { nombre: "Korg", logo: "logos/korg.svg" },
    { nombre: "Pearl", logo: "logos/pearl.svg" },
    { nombre: "Zildjian", logo: "logos/zildjian.svg" },
    { nombre: "Audio-Technica", logo: "logos/audio-technica.svg" },
    { nombre: "JBL", logo: "logos/jbl.svg" },
    { nombre: "Peavey", logo: "logos/peavey.svg" },
    { nombre: "D'Addario", logo: "logos/daddario.svg" },
    { nombre: "Maxtone", logo: "logos/maxtone.png" },
    { nombre: "Palmer", logo: "logos/palmer.svg" },
    { nombre: "5D2", logo: "logos/5d2.svg" },
    { nombre: "Latina", logo: "logos/latina.svg" },
    { nombre: "Kohlt", logo: "logos/kohlt.svg" },
    { nombre: "Lyonel", logo: "logos/lyonel.svg" },
    { nombre: "Shadow Ranger", logo: "logos/shadow-ranger.svg" },
];

/* ---------- 4) TESTIMONIOS (EDITA AQUÍ) ---------- */
const TESTIMONIOS = [
    {
        texto: "Me asesoraron paso a paso para elegir mi primera guitarra acústica y pude apartarla con una prima accesible. ¡Excelente trato y paciencia!",
        autor: "Carlos Mendoza",
        sucursal: "Sucursal León",
    },
    {
        texto: "Compré mi set de congas y herrajes a cuotas. Los pagos fueron muy cómodos y el producto vino perfectamente calibrado.",
        autor: "Marcos Somarriba",
        sucursal: "Sucursal Chinandega",
    },
    {
        texto: "Equipamos el sistema de audio y micrófonos para nuestro grupo. Los asesores saben exactamente de especificaciones técnicas.",
        autor: "Pastor Daniel Ruiz",
        sucursal: "Sucursal Managua",
    },
];

/* ---------- 5) SUCURSALES (EDITA AQUÍ) ---------- */
const SUCURSALES = [
    {
        id: 1,
        nombre: "Sucursal León",
        direccion: "Parque de los Poetas, 1/2 cuadra al oeste, León",
        telefono: "+505 8937 9316",
        horario: "Lun a Sáb · 8:00 am – 6:00 pm",
        mapsQuery: "Armonia Music Leon Nicaragua",
    },
    {
        id: 2,
        nombre: "Sucursal Chinandega",
        direccion: "Costado oeste del Parque Central, Chinandega",
        telefono: "+505 0000 0000",
        horario: "Lun a Sáb · 8:00 am – 6:00 pm",
        mapsQuery: "Armonia Music Chinandega Nicaragua",
    },
    {
        id: 3,
        nombre: "Sucursal Managua",
        direccion: "Centro Comercial Managua, Módulo Principal",
        telefono: "+505 0000 0000",
        horario: "Lun a Sáb · 8:00 am – 6:00 pm",
        mapsQuery: "Armonia Music Managua Nicaragua",
    },
    {
        id: 4,
        nombre: "Sucursal Estelí",
        direccion: "Avenida Central, frente a Banpro, Estelí",
        telefono: "+505 0000 0000",
        horario: "Lun a Sáb · 8:00 am – 6:00 pm",
        mapsQuery: "Armonia Music Esteli Nicaragua",
    },
    {
        id: 5,
        nombre: "Sucursal Matagalpa",
        direccion: "Del Parque Morazán 2c al este, Matagalpa",
        telefono: "+505 0000 0000",
        horario: "Lun a Sáb · 8:00 am – 6:00 pm",
        mapsQuery: "Armonia Music Matagalpa Nicaragua",
    },
    {
        id: 6,
        nombre: "Sucursal Masaya",
        direccion: "Costado norte del Mercado de Artesanías, Masaya",
        telefono: "+505 0000 0000",
        horario: "Lun a Sáb · 8:00 am – 6:00 pm",
        mapsQuery: "Armonia Music Masaya Nicaragua",
    },
];

/* ---------- 6) PREGUNTAS FRECUENTES (EDITA AQUÍ) ---------- */
const FAQS = [
    {
        id: 1,
        pregunta: "¿Cómo funciona el Sistema de Apartado en Armonía?",
        respuesta:
            "Puedes reservar cualquier instrumento o equipo de sonido con una prima mínima (desde el 20% del valor total) y te congelamos el precio inmediatamente. Dispones de hasta 60 a 90 días para retirarlo, realizando abonos quincenales o mensuales a tu propio ritmo en cualquiera de nuestras sucursales.",
    },
    {
        id: 2,
        pregunta: "¿Cuáles son los requisitos para solicitar crédito o financiamiento?",
        respuesta:
            "Los requisitos son ágiles y sencillos: presentar tu cédula de identidad vigente, constancia o soporte de ingresos (laboral o de negocio por cuenta propia) y un recibo básico de servicio (agua o luz). Te atendemos y evaluamos la solicitud de forma rápida directamente en tienda.",
    },
    {
        id: 3,
        pregunta: "¿Hacen envíos a otros departamentos de Nicaragua?",
        respuesta:
            "¡Sí! Aunque disponemos de 6 sucursales físicas (León, Chinandega, Managua, Estelí, Matagalpa y Masaya), coordinamos envíos seguros y cuidadosamente embalados hacia cualquier municipio o departamento del país a través de agencias de encomienda y transporte nacional autorizadas.",
    },
    {
        id: 4,
        pregunta: "¿Qué métodos de pago aceptan en las tiendas?",
        respuesta:
            "Aceptamos efectivo en córdobas y dólares, transferencias bancarias directas (BAC Credomatic, Banco Lafise, Banpro), tarjetas de crédito y débito Visa y Mastercard, además de abonos programados en caja para cuentas de apartado.",
    },
    {
        id: 5,
        pregunta: "¿Los instrumentos vienen inspeccionados y con garantía?",
        respuesta:
            "Absolutamente. Todo instrumento nuevo es inspeccionado previamente en clavijas, afinación, curvatura de mástil y pastillas por músicos de nuestro equipo. Además, cuentas con garantía oficial de tienda que respalda tu inversión ante defectos de fabricación.",
    },
    {
        id: 6,
        pregunta: "¿Puedo ir a probar un instrumento antes de decidirme?",
        respuesta:
            "¡Por supuesto! Nuestras sucursales cuentan con espacios e instrumentos listos para tocar. Puedes probar la resonancia, el tacto del diapasón o la respuesta acústica con toda confianza antes de comprar o apartar.",
    },
];

/* ============================================================
   MOTOR DE LA PÁGINA (Renderizado y eventos)
   ============================================================ */

let familiaActiva = "Todos";
let marcaFiltro = "";
let textoBusqueda = "";
let soloDestacados = false;


function formatoUsd(n) {
    const num = Number(n);
    if (!Number.isFinite(num)) return "";
    return `$${num.toLocaleString("en-US")} USD`;
}

function precioReferencia(p) {
    return Number.isFinite(Number(p && p.precioUsd)) ? Number(p.precioUsd) : null;
}

const FAMILIAS = () => ["Todos", ...new Set(PRODUCTOS.map((p) => p.categoria))];

// Generador de enlaces seguros de WhatsApp
const waLink = (mensaje) =>
    `https://wa.me/${WA_NUMERO}?text=${encodeURIComponent(mensaje)}`;

// Filtrado inteligente combinado (Categoría, Marca, Destacados y Texto libre)
function productosVisibles() {
    const q = textoBusqueda.trim().toLowerCase();
    return PRODUCTOS.filter((p) => {
        const cumpleFamilia =
            familiaActiva === "Todos" || p.categoria === familiaActiva;
        const cumpleMarca =
            !marcaFiltro ||
            (p.marca && p.marca.toLowerCase() === marcaFiltro.toLowerCase());
        const cumpleDestacado = !soloDestacados || p.destacado;

        if (!cumpleFamilia || !cumpleMarca || !cumpleDestacado) return false;
        if (!q) return true;

        const textoCompleto =
            `${p.nombre} ${p.marca || ""} ${p.categoria} ${p.descripcion} ${p.precioUsd || ""} ${p.specs ? Object.values(p.specs).join(" ") : ""}`.toLowerCase();
        return textoCompleto.includes(q);
    });
}

// Render de tarjeta de producto con fallback elegante de imagen
function productoCard(p) {
    const brandHtml = p.marca
        ? `<span class="sw-product-brand">${p.marca}</span>`
        : `<span class="sw-product-brand">ARMONÍA</span>`;

    const featBadge = p.destacado
        ? `<span class="sw-product-star" title="Instrumento Destacado">★</span>`
        : "";

    const imgHtml = p.foto
        ? `<img src="${p.foto}" alt="${p.nombre}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
       <div class="sw-product-fallback" style="display:none;">
         <span class="sw-product-fallback-icon">${p.icono || "♫"}</span>
         <span class="sw-product-fallback-text">${p.categoria}</span>
       </div>`
        : `<div class="sw-product-fallback">
         <span class="sw-product-fallback-icon">${p.icono || "♫"}</span>
         <span class="sw-product-fallback-text">${p.categoria}</span>
       </div>`;

    const precioTxt = precioReferencia(p) != null ? ` (ref. ${formatoUsd(p.precioUsd)})` : "";
    const waMsg = `Hola Armonía Music, deseo consultar disponibilidad y planes de apartado para: ${p.marca ? p.marca + " " : ""}${p.nombre}${precioTxt}`;

    return `
    <article class="sw-product" data-id="${p.id}">
      <div class="sw-product-media">
        ${imgHtml}
        ${featBadge}
      </div>
      <div class="sw-product-body">
        <div class="sw-product-top">
          ${brandHtml}
          <span class="sw-product-cat-pill">${p.categoria}</span>
        </div>
        <h3 class="sw-product-name">${p.nombre}</h3>
        ${precioReferencia(p) != null ? `<p class="sw-product-price">${formatoUsd(p.precioUsd)} <span>ref. en tienda</span></p>` : ""}
        <p class="sw-product-desc">${p.descripcion}</p>
        <div class="sw-product-foot">
          <button type="button" class="sw-btn-details" onclick="abrirModalProducto(${p.id})">Ver detalles</button>
          <a class="sw-btn-wa-card" target="_blank" rel="noopener" href="${waLink(waMsg)}">
            <svg class="sw-ico" aria-hidden="true"><use href="#i-wa"></use></svg>
            <span>Consultar</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

// Estado de apertura calculado desde el horario general (Lun a Sáb, 8am–6pm)
function sucursalAbierta() {
    const ahora = new Date();
    const dia = ahora.getDay(); // 0 = domingo
    const hora = ahora.getHours() + ahora.getMinutes() / 60;
    if (dia === 0) return false; // Domingos: consultar por sucursal
    return hora >= 8 && hora < 18;
}

// Render de tarjeta de sucursal
function sucursalCard(s) {
    const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapsQuery || "Armonia Music " + s.nombre)}`;
    const waBranchMsg = `Hola Armonía, me comunico para consultar disponibilidad en la ${s.nombre}.`;
    const abierta = sucursalAbierta();

    return `
    <article class="sw-branch-card">
      <div class="sw-branch-header">
        <h3 class="sw-branch-name">${s.nombre}</h3>
        <span class="sw-branch-status${abierta ? "" : " is-closed"}">${abierta ? "Abierto ahora" : "Cerrado"}</span>
      </div>
      <div class="sw-branch-info">
        <div class="sw-binfo-row">
          <span>📍</span>
          <span>${s.direccion}</span>
        </div>
        <div class="sw-binfo-row">
          <span>📞</span>
          <span>${s.telefono}</span>
        </div>
        <div class="sw-binfo-row">
          <span>⏰</span>
          <span>${s.horario}</span>
        </div>
      </div>
      <div class="sw-branch-actions">
        <a class="sw-btn-branch-map" href="${mapLink}" target="_blank" rel="noopener">📍 Cómo llegar</a>
        <a class="sw-btn-branch-wa" href="${waLink(waBranchMsg)}" target="_blank" rel="noopener">💬 WhatsApp</a>
      </div>
    </article>
  `;
}

// Pintar barra de categorías con conteo y botón de Destacados
function pintarFamilias() {
    const cont = document.getElementById("swFamilies");
    if (!cont) return;

    const totalDestacados = PRODUCTOS.filter((p) => p.destacado).length;
    const familias = FAMILIAS();

    const botonesFamilias = familias.map((cat) => {
        const count =
            cat === "Todos"
                ? PRODUCTOS.length
                : PRODUCTOS.filter((p) => p.categoria === cat).length;
        const activeClass =
            cat === familiaActiva && !soloDestacados ? " is-active" : "";
        return `
        <button class="sw-family${activeClass}" data-cat="${cat}">
          <span>${cat}</span>
          <span class="sw-family-count">${count}</span>
        </button>
      `;
    });

    const activeDestacados = soloDestacados ? " is-active" : "";
    const botonDestacados = `
      <button class="sw-family sw-family-featured${activeDestacados}" id="swBtnFeatured" data-featured="true">
        <span>⭐ Destacados</span>
        <span class="sw-family-count">${totalDestacados}</span>
      </button>
    `;

    cont.innerHTML = [...botonesFamilias, botonDestacados].join("");
}

// Pintar lista de productos
function pintarProductos() {
    const cont = document.getElementById("swProducts");
    const countLabel = document.getElementById("swProductCount");
    const lista = productosVisibles();

    pintarChipsFiltro();
    countLabel.textContent = `Mostrando ${lista.length} de ${PRODUCTOS.length} instrumentos`;

    if (lista.length) {
        cont.innerHTML = lista.map(productoCard).join("");
    } else {
        const pista =
            textoBusqueda ||
            marcaFiltro ||
            (soloDestacados ? "Destacados" : familiaActiva);
        cont.innerHTML = `
      <div class="sw-empty">
        <p>No encontramos ningún instrumento que coincida con tu búsqueda.</p>
        <div class="sw-empty-actions">
          <button class="sw-btn sw-btn-ghost" onclick="restablecerFiltros()">Mostrar todos los instrumentos</button>
          <a class="sw-btn-wa-card" target="_blank" rel="noopener" href="${waLink(`Hola Armonía, busco: ${pista}`)}">Consultar por WhatsApp</a>
        </div>
      </div>
    `;
    }
}

// Chip visible cuando hay un filtro de marca o destacados activo
function pintarChipsFiltro() {
    const cont = document.getElementById("swActiveFilters");
    if (!cont) return;

    const chips = [];

    if (marcaFiltro) {
        chips.push(`
        <span class="sw-filter-chip">
          Marca: <strong>${marcaFiltro}</strong>
          <button type="button" onclick="quitarFiltroMarca()" aria-label="Quitar filtro de marca">&times;</button>
        </span>
      `);
    }

    if (soloDestacados) {
        chips.push(`
        <span class="sw-filter-chip">
          Filtro: <strong>Solo Destacados ⭐</strong>
          <button type="button" onclick="toggleSoloDestacados(false)" aria-label="Quitar filtro destacados">&times;</button>
        </span>
      `);
    }

    cont.innerHTML = chips.join("");
}

// Pintar marcas oficiales con click interactivo
function pintarMarcas() {
    const cont = document.getElementById("swBrands");
    if (!cont) return;
    cont.innerHTML = MARCAS.map((m) => {
        const activeClass = marcaFiltro === m.nombre ? " is-active" : "";
        const content = m.logo
            ? `<img class="sw-brand-logo" src="${m.logo}" alt="${m.nombre}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
         <span class="sw-brand-text" style="display:none;">${m.nombre}</span>`
            : `<span class="sw-brand-text">${m.nombre}</span>`;

        return `<div class="sw-brand-item${activeClass}" onclick="filtrarPorMarca('${m.nombre}')" title="Ver instrumentos ${m.nombre}">${content}</div>`;
    }).join("");
}

// Pintar sucursales
function pintarSucursales() {
    const cont = document.getElementById("swBranches");
    if (cont) {
        cont.innerHTML = SUCURSALES.map(sucursalCard).join("");
    }
}

// Pintar testimonios con estrellas doradas
function pintarTestimonios() {
    const cont = document.getElementById("swReviews");
    if (!cont) return;
    const starSvg = `<svg class="sw-star-icon" viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/></svg>`;

    cont.innerHTML = TESTIMONIOS.map(
        (t) => `
    <article class="sw-review-card">
      <div>
        <div class="sw-stars">${starSvg.repeat(5)}</div>
        <p class="sw-review-quote">&ldquo;${t.texto}&rdquo;</p>
      </div>
      <p class="sw-review-author"><strong>${t.autor}</strong> · ${t.sucursal}</p>
    </article>
  `,
    ).join("");
}

// Pintar Preguntas Frecuentes (Acordeón)
function pintarFaq() {
    const cont = document.getElementById("swFaqList");
    if (!cont) return;

    cont.innerHTML = FAQS.map((faq, idx) => {
        const isFirst = idx === 0;
        return `
      <div class="sw-faq-item${isFirst ? " is-open" : ""}" data-faq="${faq.id}">
        <button type="button" class="sw-faq-q" aria-expanded="${isFirst ? "true" : "false"}">
          <span class="sw-faq-title">${faq.pregunta}</span>
          <span class="sw-faq-icon">
            <svg class="sw-ico" aria-hidden="true"><use href="#i-chevron-down"></use></svg>
          </span>
        </button>
        <div class="sw-faq-a" style="${isFirst ? "" : "display: none;"}">
          <p>${faq.respuesta}</p>
        </div>
      </div>
    `;
    }).join("");
}

// Configurar enlaces globales de contacto
function pintarContacto() {
    const saludo =
        "Hola Armonía, deseo información sobre disponibilidad y apartados de instrumentos.";

    const elTopWa = document.getElementById("swTopWa");
    if (elTopWa) elTopWa.href = waLink(saludo);

    const elHeaderWa = document.getElementById("swHeaderWa");
    if (elHeaderWa) elHeaderWa.href = waLink(saludo);

    const elHeroWa = document.getElementById("swHeroWa");
    if (elHeroWa) elHeroWa.href = waLink(saludo);

    const elContactWa = document.getElementById("swContactWa");
    if (elContactWa) elContactWa.href = waLink(saludo);

    const elContactWaNum = document.getElementById("swContactWaNum");
    if (elContactWaNum) elContactWaNum.textContent = `+${WA_NUMERO}`;

    const elContactTel = document.getElementById("swContactTel");
    if (elContactTel)
        elContactTel.href = `tel:${TELEFONO.replace(/[^+\d]/g, "")}`;

    const elContactTelNum = document.getElementById("swContactTelNum");
    if (elContactTelNum) elContactTelNum.textContent = TELEFONO;

    const elContactMail = document.getElementById("swContactMail");
    if (elContactMail) elContactMail.href = `mailto:${CORREO}`;

    const elContactMailTxt = document.getElementById("swContactMailTxt");
    if (elContactMailTxt) elContactMailTxt.textContent = CORREO;

    // Widget WhatsApp opciones
    const elWaOptCat = document.getElementById("swWaOptCat");
    if (elWaOptCat)
        elWaOptCat.href = waLink(
            "Hola Armonía, quiero consultar el catálogo y disponibilidad.",
        );

    const elWaOptCred = document.getElementById("swWaOptCred");
    if (elWaOptCred)
        elWaOptCred.href = waLink(
            "Hola, deseo conocer los requisitos para apartar con prima o crédito.",
        );

    const elWaOptBranch = document.getElementById("swWaOptBranch");
    if (elWaOptBranch)
        elWaOptBranch.href = waLink(
            "Hola, deseo consultar la sucursal más cercana para retirar un instrumento.",
        );
}

// Modal interactivo de producto con Ficha Técnica, Deep Linking y Compartir
window.abrirModalProducto = function (idOrSlug, actualizarHash = true) {
    const p = PRODUCTOS.find(
        (item) => item.id == idOrSlug || item.slug === idOrSlug,
    );
    if (!p) return;

    if (actualizarHash) {
        history.replaceState(null, "", `#producto=${p.slug || p.id}`);
    }

    const modal = document.getElementById("swModal");
    const modalBody = document.getElementById("swModalBody");

    const mediaContent = p.foto
        ? `<img src="${p.foto}" alt="${p.nombre}" onerror="this.parentElement.innerHTML='<div class=\\'sw-product-fallback\\'><span class=\\'sw-product-fallback-icon\\'>${p.icono || "♫"}</span></div>'">`
        : `<div class="sw-product-fallback"><span class="sw-product-fallback-icon">${p.icono || "♫"}</span></div>`;

    const precioTxt = precioReferencia(p) != null ? ` (precio de referencia ${formatoUsd(p.precioUsd)})` : "";
    const waMsg = `Hola Armonía, me interesa consultar disponibilidad, métodos de pago y apartado para: ${p.marca ? p.marca + " " : ""}${p.nombre}${precioTxt}`;

    // Desglose de especificaciones estructuradas
    const specsHtml = p.specs
        ? `
      <div class="sw-modal-specs">
        <div class="sw-spec-item">
          <span class="sw-spec-label">Construcción</span>
          <strong class="sw-spec-val">${p.specs.material || "Materiales de alta durabilidad"}</strong>
        </div>
        <div class="sw-spec-item">
          <span class="sw-spec-label">Incluye</span>
          <strong class="sw-spec-val">${p.specs.incluye || "Instrumento verificado en tienda"}</strong>
        </div>
        <div class="sw-spec-item">
          <span class="sw-spec-label">Nivel</span>
          <strong class="sw-spec-val">${p.specs.nivel || "Iniciación y avanzado"}</strong>
        </div>
        <div class="sw-spec-item">
          <span class="sw-spec-label">Garantía</span>
          <strong class="sw-spec-val">${p.specs.garantia || "Garantía oficial Armonía"}</strong>
        </div>
      </div>
    `
        : "";

    modalBody.innerHTML = `
    <div class="sw-modal-detail-grid">
      <div class="sw-modal-media">
        ${mediaContent}
      </div>
      <div class="sw-modal-info">
        <div class="sw-modal-meta">
          <span class="sw-product-brand">${p.marca || "ARMONÍA"}</span>
          <span class="sw-product-cat-pill">${p.categoria}</span>
          ${p.destacado ? '<span class="sw-product-feat-badge">★ Destacado</span>' : ""}
        </div>
        <h2 class="sw-modal-title" id="swModalTitle">${p.nombre}</h2>
        ${precioReferencia(p) != null ? `<p class="sw-modal-price">${formatoUsd(p.precioUsd)} <span>precio de referencia · confirma en sucursal</span></p>` : ""}
        <p class="sw-modal-desc">${p.descripcion}</p>

        ${specsHtml}

        <div class="sw-modal-perks">
          <div class="sw-modal-perk-item"><span>✓</span><span>Disponible para apartado con prima mínima (desde 20%).</span></div>
          <div class="sw-modal-perk-item"><span>✓</span><span>Opciones de financiamiento en cuotas quincenales o mensuales.</span></div>
          <div class="sw-modal-perk-item"><span>✓</span><span>Revisión técnica y afinación previa por nuestros músicos.</span></div>
        </div>

        <div class="sw-modal-actions-row">
          ${precioReferencia(p) != null ? `<button type="button" class="sw-btn-modal-share" onclick="simularApartadoProducto(${p.id})">Simular apartado</button>` : ""}
          <a class="sw-btn-modal-wa" href="${waLink(waMsg)}" target="_blank" rel="noopener">
            <svg class="sw-ico" aria-hidden="true"><use href="#i-wa"></use></svg>
            <span>Preguntar disponibilidad por WhatsApp</span>
          </a>
          <button type="button" class="sw-btn-modal-share" id="swBtnShare" onclick="copiarEnlaceProducto(${p.id})">
            <svg class="sw-ico" aria-hidden="true"><use href="#i-share"></use></svg>
            <span id="swBtnShareText">Compartir enlace</span>
          </button>
        </div>
      </div>
    </div>
  `;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
};

// Cerrar modal y limpiar hash de producto en la barra de direcciones
function cerrarModal() {
    const modal = document.getElementById("swModal");
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (window.location.hash.startsWith("#producto")) {
        history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search,
        );
    }
}

// Copiar enlace directo del producto al portapapeles

window.simularApartadoProducto = function (id) {
    const p = PRODUCTOS.find((item) => item.id == id);
    const precio = precioReferencia(p);
    cerrarModal();
    const slider = document.getElementById("swSimSlider");
    if (slider && precio != null) {
        const min = Number(slider.min) || 60;
        const max = Number(slider.max) || 1000;
        slider.value = Math.min(max, Math.max(min, precio));
        slider.dispatchEvent(new Event("input"));
        document.querySelectorAll("[data-preset-price]").forEach((b) => b.classList.remove("is-active"));
    }
    const sec = document.getElementById("planes");
    if (sec) sec.scrollIntoView({ behavior: "smooth" });
};

window.copiarEnlaceProducto = function (id) {
    const p = PRODUCTOS.find((item) => item.id == id);
    if (!p) return;

    const url = `${window.location.origin}${window.location.pathname}#producto=${p.slug || p.id}`;
    const btnText = document.getElementById("swBtnShareText");

    const feedback = () => {
        if (btnText) {
            const original = btnText.textContent;
            btnText.textContent = "¡Enlace copiado! ✓";
            btnText.parentElement.classList.add("is-copied");
            setTimeout(() => {
                btnText.textContent = original;
                btnText.parentElement.classList.remove("is-copied");
            }, 2500);
        }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
            .writeText(url)
            .then(feedback)
            .catch(() => prompt("Copia el siguiente enlace directo:", url));
    } else {
        prompt("Copia el siguiente enlace directo:", url);
    }
};

// Revisar hash de URL al cargar o navegar en el historial
function revisarHashUrl() {
    const hash = window.location.hash;
    if (hash.startsWith("#producto=")) {
        const ref = hash.replace("#producto=", "").trim();
        if (ref) {
            abrirModalProducto(ref, false);
        }
    }
}

// Filtro rápido por marca
window.filtrarPorMarca = function (marca) {
    marcaFiltro = marca;
    familiaActiva = "Todos";
    soloDestacados = false;
    pintarFamilias();
    pintarMarcas();
    pintarProductos();

    const sec = document.getElementById("catalogo");
    if (sec) sec.scrollIntoView({ behavior: "smooth" });
};

window.quitarFiltroMarca = function () {
    marcaFiltro = "";
    pintarFamilias();
    pintarMarcas();
    pintarProductos();
};

window.toggleSoloDestacados = function (valor) {
    soloDestacados = typeof valor === "boolean" ? valor : !soloDestacados;
    if (soloDestacados) {
        marcaFiltro = "";
    }
    pintarFamilias();
    pintarMarcas();
    pintarProductos();
};

window.restablecerFiltros = function () {
    familiaActiva = "Todos";
    marcaFiltro = "";
    soloDestacados = false;
    textoBusqueda = "";
    const searchInput = document.getElementById("swSearch");
    if (searchInput) searchInput.value = "";
    const searchClear = document.getElementById("swSearchClear");
    if (searchClear) searchClear.style.display = "none";
    pintarFamilias();
    pintarMarcas();
    pintarProductos();
};

/* ---------- 7) SIMULADOR DE APARTADOS & CRÉDITO ---------- */
function activarSimuladorApartados() {
    const slider = document.getElementById("swSimSlider");
    const labelTotal = document.getElementById("swSimTotal");
    const labelPrima = document.getElementById("swSimPrima");
    const labelSaldo = document.getElementById("swSimSaldo");
    const labelCuotaQ = document.getElementById("swSimCuotaQ");
    const labelCuotaM = document.getElementById("swSimCuotaM");
    const btnSimWa = document.getElementById("swSimWa");

    if (!slider || !labelTotal) return;

    function recalcular() {
        const total = parseFloat(slider.value) || 200;
        const prima = Math.round(total * 0.2); // 20% prima mínima
        const saldo = total - prima;
        const cuotaQuincenal = (saldo / 4).toFixed(1); // 4 quincenas (60 días)
        const cuotaMensual = (saldo / 2).toFixed(1); // 2 meses (60 días)

        labelTotal.textContent = `$${total} USD`;
        labelPrima.textContent = `$${prima} USD`;
        labelSaldo.textContent = `$${saldo} USD`;
        if (labelCuotaQ) labelCuotaQ.textContent = `$${cuotaQuincenal} USD`;
        if (labelCuotaM) labelCuotaM.textContent = `$${cuotaMensual} USD`;

        if (btnSimWa) {
            const msg = `Hola Armonía Music, coticé en su web un apartado para un instrumento de aprox. $${total} USD (prima sugerida $${prima} USD). Deseo conocer qué modelos tienen en este rango.`;
            btnSimWa.href = waLink(msg);
        }
    }

    slider.addEventListener("input", recalcular);

    // Botones de presets rápidos
    const presetBtns = document.querySelectorAll("[data-preset-price]");
    presetBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            presetBtns.forEach((b) => b.classList.remove("is-active"));
            btn.classList.add("is-active");
            slider.value = btn.dataset.presetPrice;
            recalcular();
        });
    });

    recalcular();
}

// Eventos y listeners
function activarEventos() {
    // Cambio de categorías y botón de Destacados
    const familiesBar = document.getElementById("swFamilies");
    if (familiesBar) {
        familiesBar.addEventListener("click", (e) => {
            const btnFeat = e.target.closest("#swBtnFeatured");
            if (btnFeat) {
                toggleSoloDestacados();
                return;
            }

            const btn = e.target.closest(".sw-family");
            if (!btn) return;
            familiaActiva = btn.dataset.cat;
            soloDestacados = false;
            marcaFiltro = ""; // Reinicia filtro de marca si cambia familia
            pintarFamilias();
            pintarMarcas();
            pintarProductos();
        });
    }

    // Búsqueda en vivo
    const searchInput = document.getElementById("swSearch");
    const searchClear = document.getElementById("swSearchClear");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            textoBusqueda = e.target.value;
            if (searchClear)
                searchClear.style.display = textoBusqueda ? "block" : "none";
            pintarProductos();
        });
    }

    if (searchClear && searchInput) {
        searchClear.addEventListener("click", () => {
            searchInput.value = "";
            textoBusqueda = "";
            searchClear.style.display = "none";
            pintarProductos();
            searchInput.focus();
        });
    }

    // Modal cierres
    const modalClose = document.getElementById("swModalClose");
    if (modalClose) modalClose.addEventListener("click", cerrarModal);

    const modalBackdrop = document.getElementById("swModalBackdrop");
    if (modalBackdrop) modalBackdrop.addEventListener("click", cerrarModal);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") cerrarModal();
    });

    // Menú móvil
    const burger = document.getElementById("swBurger");
    const nav = document.getElementById("swNav");

    if (burger && nav) {
        burger.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("is-open");
            burger.setAttribute("aria-expanded", isOpen);
        });

        nav.addEventListener("click", (e) => {
            if (e.target.tagName === "A") {
                nav.classList.remove("is-open");
                burger.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Widget flotante de WhatsApp
    const waFloat = document.getElementById("swFloatWa");
    const waPopup = document.getElementById("swWaPopup");
    const waPopupClose = document.getElementById("swWaPopupClose");

    if (waFloat && waPopup) {
        waFloat.addEventListener("click", (e) => {
            e.stopPropagation();
            waPopup.classList.toggle("is-open");
        });
    }

    if (waPopupClose && waPopup) {
        waPopupClose.addEventListener("click", () => {
            waPopup.classList.remove("is-open");
        });
    }

    document.addEventListener("click", (e) => {
        if (waPopup && !e.target.closest("#swWaWidget")) {
            waPopup.classList.remove("is-open");
        }
    });

    // Interacción del acordeón FAQ
    const faqList = document.getElementById("swFaqList");
    if (faqList) {
        faqList.addEventListener("click", (e) => {
            const btn = e.target.closest(".sw-faq-q");
            if (!btn) return;
            const item = btn.closest(".sw-faq-item");
            if (!item) return;

            const isOpen = item.classList.contains("is-open");
            const answer = item.querySelector(".sw-faq-a");

            if (isOpen) {
                item.classList.remove("is-open");
                btn.setAttribute("aria-expanded", "false");
                if (answer) answer.style.display = "none";
            } else {
                // Cerrar otros si se prefiere comportamiento acordeón estricto
                faqList.querySelectorAll(".sw-faq-item").forEach((el) => {
                    el.classList.remove("is-open");
                    el.querySelector(".sw-faq-q")?.setAttribute(
                        "aria-expanded",
                        "false",
                    );
                    const ans = el.querySelector(".sw-faq-a");
                    if (ans) ans.style.display = "none";
                });

                item.classList.add("is-open");
                btn.setAttribute("aria-expanded", "true");
                if (answer) answer.style.display = "block";
            }
        });
    }

    // Escucha de cambios de hash en la ventana
    window.addEventListener("hashchange", () => {
        if (window.location.hash.startsWith("#producto=")) {
            revisarHashUrl();
        } else {
            const modal = document.getElementById("swModal");
            if (modal && modal.classList.contains("is-open")) {
                cerrarModal();
            }
        }
    });
}

// Resalta en el menú la sección visible mientras se hace scroll
function activarScrollSpy() {
    const links = [...document.querySelectorAll(".sw-nav-link")];
    const secciones = new Map();
    links.forEach((l) => {
        const id = (l.getAttribute("href") || "").slice(1);
        const sec = document.getElementById(id);
        if (sec) secciones.set(sec, l);
    });

    const obs = new IntersectionObserver(
        (entradas) => {
            entradas.forEach((en) => {
                if (!en.isIntersecting) return;
                links.forEach((l) => l.classList.remove("active"));
                secciones.get(en.target)?.classList.add("active");
            });
        },
        { rootMargin: "-35% 0px -60% 0px" },
    );
    secciones.forEach((_, sec) => obs.observe(sec));
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("swYear");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    pintarFamilias();
    pintarProductos();
    pintarMarcas();
    pintarSucursales();
    pintarTestimonios();
    pintarFaq();
    pintarContacto();
    activarSimuladorApartados();
    activarEventos();
    activarScrollSpy();
    revisarHashUrl();
});
