/* Lote de piso — fotos reales + precios de referencia (USD).
   Confirmar siempre en sucursal. Se carga DESPUES de app.js. */
(function () {
    if (typeof PRODUCTOS === "undefined") return;
    var extra = [
        {id:101,slug:"behringer-c1u",precioUsd:55,marca:"Behringer",nombre:"Micrófono condensador USB C-1U",categoria:"Audio",descripcion:"Condensador cardioide USB. Foto de sucursal.",icono:"🎙️",foto:"fotos/behringer-c1u.jpg",destacado:true,specs:{material:"Cardioide USB",incluye:"Micrófono + montura",nivel:"Home studio",garantia:"Tienda Armonía"}},
        {id:102,slug:"shure-sm58-caja",precioUsd:119,marca:"Shure",nombre:"Micrófono vocal SM58",categoria:"Audio",descripcion:"Estándar de escenario. Precio de referencia.",icono:"🎙️",foto:"fotos/shure-sm58-caja.jpg",destacado:true,specs:{material:"Dinámico cardioide",incluye:"Mic, clip y funda según lote",nivel:"Vivo",garantia:"Armonía"}},
        {id:103,slug:"orange-crush-bass",precioUsd:399,marca:"Orange",nombre:"Amplificador Orange Crush Bass",categoria:"Audio",descripcion:"Combo de bajos. Confirmar 50 o 100 W en piso.",icono:"🔊",foto:"fotos/orange-crush-bass.jpg",destacado:true,specs:{material:"Combo naranja",incluye:"Amplificador",nivel:"Ensayo",garantia:"Tienda"}},
        {id:104,slug:"ibanez-gsr205",precioUsd:349,marca:"Ibanez",nombre:"Bajo Ibanez GSR205 de 5 cuerdas",categoria:"Cuerdas",descripcion:"GSR205SM NGT en pared. Soundgear 5 cuerdas.",icono:"🎸",foto:"fotos/ibanez-gsr205.jpg",destacado:true,specs:{material:"5 cuerdas",incluye:"Bajo",nivel:"Intermedio",garantia:"Armonía"}},
        {id:105,slug:"congas-meinl",precioUsd:420,marca:"Meinl",nombre:"Par de congas Meinl con stand",categoria:"Percusión",descripcion:"Sunburst, parche natural y stand. Foto de piso.",icono:"🥁",foto:"fotos/congas-meinl.jpg",destacado:true,specs:{material:"Madera + stand",incluye:"Par + stand",nivel:"Salsa",garantia:"Tienda"}},
        {id:106,slug:"yorkville-ls801p",precioUsd:890,marca:"Yorkville",nombre:"Subwoofer Yorkville Elite LS801P 18\"",categoria:"Audio",descripcion:"Sub 18 activo Elite, plywood.",icono:"🔊",foto:"fotos/yorkville-ls801p.jpg",destacado:true,specs:{material:"Plywood 18\"",incluye:"Sub activo",nivel:"PA",garantia:"Consulta"}},
        {id:107,slug:"infinity-ra-a4106",precioUsd:89,marca:"Infinity Music",nombre:"Bafle de pared RA-A4106P-W",categoria:"Audio",descripcion:"Bafle blanco 60 W para local o iglesia.",icono:"🔈",foto:"fotos/infinity-ra-a4106.jpg",destacado:false,specs:{material:"Plástico blanco",incluye:"Bafle + herraje",nivel:"Instalación",garantia:"Tienda"}},
        {id:108,slug:"infinity-5108s",precioUsd:65,marca:"Infinity Music",nombre:"Driver titanio 5108S 400 W",categoria:"Audio",descripcion:"8 ohm / 400 W.",icono:"🔧",foto:"fotos/infinity-5108s.jpg",destacado:false,specs:{material:"8 ohm",incluye:"Driver",nivel:"Repuesto",garantia:"Tienda"}},
        {id:109,slug:"infinity-4408s",precioUsd:55,marca:"Infinity Music",nombre:"Driver titanio 4408S 300 W",categoria:"Audio",descripcion:"8 ohm / 300 W.",icono:"🔧",foto:"fotos/infinity-4408s.jpg",destacado:false,specs:{material:"8 ohm",incluye:"Driver",nivel:"Repuesto",garantia:"Tienda"}},
        {id:110,slug:"infinity-3408s",precioUsd:45,marca:"Infinity Music",nombre:"Driver titanio 3408S 200 W",categoria:"Audio",descripcion:"8 ohm / 200 W.",icono:"🔧",foto:"fotos/infinity-3408s.jpg",destacado:false,specs:{material:"8 ohm",incluye:"Driver",nivel:"Repuesto",garantia:"Tienda"}},
        {id:111,slug:"behringer-xr18",precioUsd:549,marca:"Behringer",nombre:"Mezcladora digital X AIR XR18",categoria:"Audio",descripcion:"18 entradas, WiFi y app X AIR.",icono:"🎛️",foto:"fotos/behringer-xr18.jpg",destacado:true,specs:{material:"Rack digital",incluye:"Consola",nivel:"Pro",garantia:"Consulta"}},
        {id:112,slug:"wireless-uhf-4",precioUsd:189,marca:"UHF",nombre:"Sistema inalámbrico UHF de 4 micrófonos",categoria:"Audio",descripcion:"4 handheld + receptor rack.",icono:"🎙️",foto:"fotos/wireless-uhf-4.jpg",destacado:false,specs:{material:"UHF 4 ch",incluye:"4 mics + receptor",nivel:"Eventos",garantia:"Tienda"}},
        {id:113,slug:"ukeleles-colores",precioUsd:35,marca:"Armonía",nombre:"Ukelele soprano de color",categoria:"Cuerdas",descripcion:"Precio por unidad. Elige color en sucursal.",icono:"🎸",foto:"fotos/ukeleles-colores.jpg",destacado:false,specs:{material:"Soprano",incluye:"Ukelele",nivel:"Inicio",garantia:"Tienda"}},
        {id:114,slug:"clasica-rosa",precioUsd:95,marca:"Eko",nombre:"Guitarra clásica rosa 4/4",categoria:"Cuerdas",descripcion:"Clásica de estudio. Foto de pared.",icono:"🎸",foto:"fotos/guitarra-clasica-rosa.jpg",destacado:false,specs:{material:"Nylon 4/4",incluye:"Guitarra",nivel:"Inicio",garantia:"Tienda"}},
        {id:115,slug:"acordeon-jmeister-rojo",precioUsd:280,marca:"J.Meister",nombre:"Acordeón J.Meister rojo",categoria:"Viento",descripcion:"Foto real de entrega. Precio de referencia.",icono:"🪗",foto:"fotos/acordeon-jmeister-rojo.jpg",destacado:true,specs:{material:"Perlado rojo",incluye:"Acordeón",nivel:"Folclor",garantia:"Revisión"}},
        {id:116,slug:"bateria-yamaha-piso",precioUsd:650,marca:"Yamaha",nombre:"Batería acústica Yamaha (kit en piso)",categoria:"Percusión",descripcion:"Confirmar piezas y platillos incluidos.",icono:"🥁",foto:"fotos/bateria-yamaha.jpg",destacado:true,specs:{material:"Cascos + herraje",incluye:"Kit según piso",nivel:"Escenario",garantia:"Consulta"}},
        {id:117,slug:"sistema-array-club",precioUsd:799,marca:"Proreck / Club",nombre:"Sistema array + sub para evento",categoria:"Audio",descripcion:"Subs + tops. Cotizar flete.",icono:"🔊",foto:"fotos/sistema-array-club.jpg",destacado:true,specs:{material:"Array + sub",incluye:"Sistema",nivel:"Renta",garantia:"Evento"}},
        {id:118,slug:"humo-f400l",precioUsd:75,marca:"Golden Century",nombre:"Máquina de humo F400L",categoria:"Audio",descripcion:"Fogger compacto para fiestas.",icono:"💨",foto:"fotos/humo-f400l.jpg",destacado:false,specs:{material:"Metal",incluye:"Máquina",nivel:"Eventos",garantia:"Tienda"}}
    ];
    extra.forEach(function (p) {
        p.imagen = p.foto;
        var i = PRODUCTOS.findIndex(function (x) { return x.slug === p.slug || x.nombre === p.nombre; });
        if (i >= 0) PRODUCTOS[i] = Object.assign({}, PRODUCTOS[i], p);
        else PRODUCTOS.push(p);
    });
    var sm58 = PRODUCTOS.find(function (p) { return /SM58/i.test(p.nombre || ""); });
    if (sm58) { sm58.foto = "fotos/shure-sm58-caja.jpg"; sm58.imagen = sm58.foto; sm58.precioUsd = sm58.precioUsd || 119; }
    if (typeof pintarProductos === "function") {
        try { pintarProductos(); if (typeof pintarMarcas === "function") pintarMarcas(); if (typeof pintarFamilias === "function") pintarFamilias(); } catch (e) {}
    }
})();
