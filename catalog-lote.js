/* Lote de piso — fotos reales + precios de referencia (USD).
   Confirmar siempre en sucursal. Se carga DESPUÉS de app.js. */
(function () {
    if (typeof PRODUCTOS === "undefined") return;

    var extra = [
        {
            id: 101,
            slug: "behringer-c1u",
            precioUsd: 55,
            marca: "Behringer",
            nombre: "Micrófono condensador USB C-1U",
            categoria: "Audio",
            descripcion:
                "Condensador cardioide con conexión USB. Listo para voz, streaming y home studio. Foto tomada en sucursal.",
            icono: "🎙️",
            foto: "fotos/behringer-c1u.jpg",
            destacado: true,
            specs: {
                material: "Cápsula condensador, patrón cardioide",
                incluye: "Micrófono + montura (consulta clip/pop filter)",
                nivel: "Home studio y voz",
                garantia: "Garantía de tienda Armonía",
            },
        },
        {
            id: 18,
            slug: "shure-sm58",
            precioUsd: 119,
            marca: "Shure",
            nombre: "Micrófono vocal profesional SM58",
            categoria: "Audio",
            descripcion:
                "El estándar de escenario. Cardioide dinámico, rejilla esférica y filtro anti-pop. Precio de referencia.",
            icono: "🎙️",
            foto: "fotos/shure-sm58.jpg",
            destacado: true,
            specs: {
                material: "Dinámico cardioide",
                incluye: "Micrófono, clip y funda (según lote)",
                nivel: "Escenario y voz en vivo",
                garantia: "Garantía de respaldo Armonía",
            },
        },
        {
            id: 103,
            slug: "orange-crush-bass",
            precioUsd: 399,
            marca: "Orange",
            nombre: "Amplificador Orange Crush Bass",
            categoria: "Audio",
            descripcion:
                "Combo naranja de bajos. Graves sólidos para ensayo y presentación chica. Confirmar wattage en piso (50 o 100).",
            icono: "🔊",
            foto: "fotos/orange-crush-bass.jpg",
            destacado: true,
            specs: {
                material: "Combo con tweed naranja",
                incluye: "Amplificador (consulta funda)",
                nivel: "Ensayo y escenario mediano",
                garantia: "Garantía de tienda",
            },
        },
        {
            id: 104,
            slug: "ibanez-gsr205",
            precioUsd: 349,
            marca: "Ibanez",
            nombre: "Bajo Ibanez GSR205 de 5 cuerdas",
            categoria: "Cuerdas",
            descripcion:
                "GSR205SM NGT visto en pared. 5 cuerdas, mástil delgado Soundgear. Precio de referencia.",
            icono: "🎸",
            foto: "fotos/ibanez-gsr205.jpg",
            destacado: true,
            specs: {
                material: "Cuerpo Soundgear, 5 cuerdas",
                incluye: "Bajo (consulta funda y correa)",
                nivel: "Intermedio",
                garantia: "Garantía Armonía",
            },
        },
        {
            id: 105,
            slug: "congas-meinl",
            precioUsd: 420,
            marca: "Meinl",
            nombre: "Par de congas Meinl con stand",
            categoria: "Percusión",
            descripcion:
                "Congas Meinl en acabado sunburst, parche natural y stand. Foto de piso.",
            icono: "🥁",
            foto: "fotos/congas-meinl.jpg",
            destacado: true,
            specs: {
                material: "Madera, herrajes negros, stand",
                incluye: "Par de congas + stand",
                nivel: "Salsa, tropi y escenario",
                garantia: "Garantía de tienda",
            },
        },
        {
            id: 106,
            slug: "yorkville-ls801p",
            precioUsd: 890,
            marca: "Yorkville",
            nombre: 'Subwoofer Yorkville Elite LS801P 18"',
            categoria: "Audio",
            descripcion:
                "Sub 18\" activo Elite. Construcción plywood, asas y ruedas. Equipo de evento.",
            icono: "🔊",
            foto: "fotos/yorkville-ls801p.jpg",
            destacado: true,
            specs: {
                material: "Plywood texturizado, 18 pulgadas",
                incluye: "Sub activo (consulta cables)",
                nivel: "Eventos y PA",
                garantia: "Consulta garantía importación",
            },
        },
        {
            id: 107,
            slug: "infinity-ra-a4106",
            precioUsd: 89,
            marca: "Infinity Music",
            nombre: "Bafle de pared RA-A4106P-W",
            categoria: "Audio",
            descripcion:
                "Bafle blanco 60 W para local, iglesia o terraza. Entrada de línea / Bluetooth según lote.",
            icono: "🔈",
            foto: "fotos/infinity-ra-a4106.jpg",
            destacado: false,
            specs: {
                material: "Gabinete plástico blanco, soporte",
                incluye: "Bafle + herraje de pared",
                nivel: "Instalación fija",
                garantia: "Garantía de tienda",
            },
        },
        {
            id: 108,
            slug: "infinity-5108s",
            precioUsd: 65,
            marca: "Infinity Music",
            nombre: "Driver de titanio 5108S 400 W",
            categoria: "Audio",
            descripcion: "Driver 8 ohm / 400 W. Recambio de agudos para cajas PA.",
            icono: "🔧",
            foto: "fotos/infinity-5108s.jpg",
            destacado: false,
            specs: {
                material: "Diafragma, 8 ohm",
                incluye: "Driver (consulta boca/horn)",
                nivel: "Técnicos y armado de cajas",
                garantia: "Garantía de tienda",
            },
        },
        {
            id: 109,
            slug: "infinity-4408s",
            precioUsd: 55,
            marca: "Infinity Music",
            nombre: "Driver de titanio 4408S 300 W",
            categoria: "Audio",
            descripcion: "Driver 8 ohm / 300 W. Precio de referencia.",
            icono: "🔧",
            foto: "fotos/infinity-4408s.jpg",
            destacado: false,
            specs: {
                material: "8 ohm, 300 W",
                incluye: "Driver",
                nivel: "Repuesto PA",
                garantia: "Garantía de tienda",
            },
        },
        {
            id: 110,
            slug: "infinity-3408s",
            precioUsd: 45,
            marca: "Infinity Music",
            nombre: "Driver de titanio 3408S 200 W",
            categoria: "Audio",
            descripcion: "Driver 8 ohm / 200 W. Entrada económica para cajas.",
            icono: "🔧",
            foto: "fotos/infinity-3408s.jpg",
            destacado: false,
            specs: {
                material: "8 ohm, 200 W",
                incluye: "Driver",
                nivel: "Repuesto PA",
                garantia: "Garantía de tienda",
            },
        },
        {
            id: 111,
            slug: "behringer-xr18",
            precioUsd: 549,
            marca: "Behringer",
            nombre: "Mezcladora digital X AIR XR18",
            categoria: "Audio",
            descripcion:
                "18 entradas, WiFi, Ultranet y app X AIR. Mesa de rack para bandas y rentas.",
            icono: "🎚️",
            foto: "fotos/behringer-xr18.jpg",
            destacado: true,
            specs: {
                material: "Rack digital powered by Midas",
                incluye: "Consola (consulta case)",
                nivel: "Profesional",
                garantia: "Consulta lote",
            },
        },
        {
            id: 112,
            slug: "wireless-uhf-4",
            precioUsd: 189,
            marca: "UHF",
            nombre: "Sistema inalámbrico UHF de 4 micrófonos",
            categoria: "Audio",
            descripcion:
                "Cuatro handheld + receptor rack dual display. Ideal iglesia, karaoke y eventos.",
            icono: "🎙️",
            foto: "fotos/wireless-uhf-4.jpg",
            destacado: false,
            specs: {
                material: "UHF, 4 canales",
                incluye: "4 micrófonos + receptor",
                nivel: "Eventos",
                garantia: "Garantía de tienda",
            },
        },
        {
            id: 113,
            slug: "ukeleles-colores",
            precioUsd: 35,
            marca: "Armonía",
            nombre: "Ukelele soprano de color",
            categoria: "Cuerdas",
            descripcion:
                "Sopranos de colores en pared. Precio por unidad; elige color en sucursal.",
            icono: "🎸",
            foto: "fotos/ukeleles-colores.jpg",
            destacado: false,
            specs: {
                material: "Cuerpo pintado, 4 cuerdas",
                incluye: "Ukelele (consulta funda)",
                nivel: "Inicio",
                garantia: "Garantía de tienda",
            },
        },
        {
            id: 114,
            slug: "clasica-rosa",
            precioUsd: 95,
            marca: "Eko",
            nombre: "Guitarra clásica rosa 4/4",
            categoria: "Cuerdas",
            descripcion: "Clásica de estudio en acabado rosa. Foto de pared en sucursal.",
            icono: "🎸",
            foto: "fotos/guitarra-clasica-rosa.jpg",
            destacado: false,
            specs: {
                material: "Clásica 4/4, cuerdas de nylon",
                incluye: "Guitarra",
                nivel: "Inicio y regalo",
                garantia: "Garantía de tienda",
            },
        },
        {
            id: 115,
            slug: "acordeon-jmeister-rojo",
            precioUsd: 280,
            marca: "J.Meister",
            nombre: "Acordeón J.Meister rojo",
            categoria: "Viento",
            descripcion:
                "Teclado piano, bajos tipo botón. Acabado perlado rojo. Precio de referencia.",
            icono: "🪗",
            foto: "fotos/acordeon-jmeister-rojo.jpg",
            destacado: true,
            specs: {
                material: "Cuerpo perlado rojo",
                incluye: "Acordeón (consulta correas y estuche)",
                nivel: "Folclor y estudio",
                garantia: "Revisión en sucursal",
            },
        },
        {
            id: 116,
            slug: "bateria-yamaha-piso",
            precioUsd: 650,
            marca: "Yamaha",
            nombre: "Batería acústica Yamaha (kit en piso)",
            categoria: "Percusión",
            descripcion:
                "Kit Yamaha visto en sucursal. Confirmar piezas, hardware y platillos incluidos.",
            icono: "🥁",
            foto: "fotos/bateria-yamaha.jpg",
            destacado: true,
            specs: {
                material: "Cascos lacados, herraje cromado",
                incluye: "Kit según piso (consulta platillos)",
                nivel: "Estudio y escenario",
                garantia: "Consulta lote",
            },
        },
        {
            id: 117,
            slug: "sistema-array-club",
            precioUsd: 799,
            marca: "Proreck / Club",
            nombre: "Sistema array + sub para evento",
            categoria: "Audio",
            descripcion:
                "Subs + tops en torre, cables y control. Armado tipo club. Cotizar flete.",
            icono: "🔊",
            foto: "fotos/sistema-array-club.jpg",
            destacado: true,
            specs: {
                material: "Subs + array + stands",
                incluye: "Sistema (consulta micrófonos)",
                nivel: "Fiestas y rentas",
                garantia: "Equipo de evento",
            },
        },
        {
            id: 118,
            slug: "humo-f400l",
            precioUsd: 75,
            marca: "Golden Century",
            nombre: "Máquina de humo F400L",
            categoria: "Audio",
            descripcion: "Fogger compacto para fiestas y escenarios chicos.",
            icono: "💨",
            foto: "fotos/humo-f400l.jpg",
            destacado: false,
            specs: {
                material: "Cuerpo metálico, tanque",
                incluye: "Máquina (consulta líquido)",
                nivel: "Eventos",
                garantia: "Garantía de tienda",
            },
        },
    ];

    extra.forEach(function (p) {
        p.imagen = p.foto;
        var i = PRODUCTOS.findIndex(function (x) {
            return x.slug === p.slug || x.nombre === p.nombre;
        });
        if (i >= 0) PRODUCTOS[i] = Object.assign({}, PRODUCTOS[i], p);
        else PRODUCTOS.push(p);
    });

    var sm58 = PRODUCTOS.find(function (p) {
        return /SM58/i.test(p.nombre || "");
    });
    if (sm58) {
        sm58.foto = "fotos/shure-sm58.jpg";
        sm58.imagen = sm58.foto;
        sm58.precioUsd = sm58.precioUsd || 119;
    }

    if (typeof pintarProductos === "function") {
        try {
            pintarProductos();
            if (typeof pintarMarcas === "function") pintarMarcas();
            if (typeof pintarFamilias === "function") pintarFamilias();
        } catch (e) {}
    }
})();
