/* Datos Facebook + impacto */
(function () {
    const TIGO = "+505 7874 9278";
    const TIKTOK_URL = "https://www.tiktok.com/@armoniamusic";
    if (typeof SUCURSALES !== "undefined") {
        SUCURSALES.splice(0, SUCURSALES.length,
            { id: 1, nombre: "Sucursal León (sede)", direccion: "Parque de los Poetas, 20 varas al este, León", telefono: "+505 8937 9316 · Tigo 7874 9278", horario: "Lun a Sáb · 8:00 am – 6:00 pm", mapsQuery: "Armonia Music Parque de los Poetas Leon Nicaragua", waLocal: "50589379316" },
            { id: 2, nombre: "Sucursal Chinandega", direccion: "Chinandega, Nicaragua", telefono: "+505 8937 9244", horario: "Lun a Sáb · consulta horario en sucursal", mapsQuery: "Armonia Music Chinandega Nicaragua", waLocal: "50589379244" },
            { id: 3, nombre: "Sucursal Estelí", direccion: "Estelí, Nicaragua", telefono: "+505 8937 9321", horario: "Lun a Sáb · consulta horario en sucursal", mapsQuery: "Armonia Music Esteli Nicaragua", waLocal: "50589379321" },
            { id: 4, nombre: "Sucursal Matagalpa", direccion: "Matagalpa, Nicaragua", telefono: "+505 8632 3793", horario: "Lun a Sáb · consulta horario en sucursal", mapsQuery: "Armonia Music Matagalpa Nicaragua", waLocal: "50586323793" },
            { id: 5, nombre: "Sucursal Jinotega", direccion: "Jinotega, Nicaragua", telefono: "+505 8933 6794", horario: "Lun a Sáb · consulta horario en sucursal", mapsQuery: "Armonia Music Jinotega Nicaragua", waLocal: "50589336794" }
        );
    }
    var originalCard = typeof sucursalCard === "function" ? sucursalCard : null;
    window.sucursalCard = function (s) {
        var html = originalCard ? originalCard(s) : "";
        if (!s.waLocal) return html;
        var wa = "https://wa.me/" + s.waLocal + "?text=" + encodeURIComponent("Hola Armonía, consulto disponibilidad en " + s.nombre + ".");
        return html.replace(/href="https:\/\/wa\.me\/[^"]+"/, 'href="' + wa + '"');
    };
    if (typeof sucursalCard === "function") sucursalCard = window.sucursalCard;
    if (!document.querySelector('script[src*="catalog-lote.js"]')) {
        var lote = document.createElement("script");
        lote.src = "catalog-lote.js?v=4.0";
        lote.defer = true;
        (document.body || document.documentElement).appendChild(lote);
    }
    document.addEventListener("DOMContentLoaded", function () {
        if (!document.querySelector('link[href*="impacto.css"]')) {
            var sheet = document.createElement("link");
            sheet.rel = "stylesheet"; sheet.href = "impacto.css?v=2.6";
            document.head.appendChild(sheet);
        }
        var kicker = document.querySelector(".sw-hero-kicker");
        if (kicker) kicker.textContent = "León · Chinandega · Estelí · Matagalpa · Jinotega";
        var footerSocial = document.querySelector(".sw-footer-social");
        if (footerSocial && !footerSocial.querySelector("[data-tiktok]")) {
            var a = document.createElement("a"); a.href = TIKTOK_URL; a.target = "_blank"; a.rel = "noopener"; a.setAttribute("data-tiktok", "1"); a.textContent = "TikTok"; footerSocial.appendChild(a);
        }
        var about = document.querySelector(".sw-about-text");
        if (about && !document.getElementById("swExtraOferta")) {
            var p = document.createElement("p"); p.id = "swExtraOferta";
            p.innerHTML = "También rentamos <strong>audio y luces</strong> para eventos en cualquier parte de Nicaragua, y armamos bandas escolares. León es la sede.";
            about.appendChild(p);
        }
        var telNum = document.getElementById("swContactTelNum");
        if (telNum) telNum.textContent = "+505 8937 9316 · Tigo " + TIGO.replace("+505 ", "");
        document.querySelectorAll(".sw-props-line span").forEach(function (el) {
            if (el.textContent.indexOf("sucursales") !== -1) el.innerHTML = "<b>5</b> sucursales";
        });
        if (typeof PRODUCTOS !== "undefined" && !document.querySelector(".sw-vitrina")) {
            var props = document.querySelector(".sw-props-strip");
            if (props) {
                var wrap = document.createElement("section"); wrap.className = "sw-vitrina";
                wrap.innerHTML = '<div class="sw-vitrina-header"><span class="sw-vitrina-label">Instrumentos en exhibición · Sucursal León</span><span class="sw-vitrina-sub">Toca cualquier instrumento para ver detalles y plan de apartado</span></div>';
                var track = document.createElement("div"); track.className = "sw-vitrina-track";
                PRODUCTOS.filter(function (p) { return p.imagen || p.foto; }).forEach(function (p) {
                    var a = document.createElement("a");
                    a.className = "sw-vitrina-item";
                    a.href = "#producto=" + (p.slug || p.id);
                    a.setAttribute("role", "button");
                    a.setAttribute("aria-label", "Ver detalles de " + p.nombre);
                    a.onclick = function (e) {
                        e.preventDefault();
                        if (typeof window.abrirModalProducto === "function") {
                            window.abrirModalProducto(p.id);
                        }
                    };
                    var precioHtml = p.precioUsd ? '<span class="sw-vitrina-price">$' + p.precioUsd + ' <small>USD</small></span>' : '';
                    a.innerHTML =
                        '<div class="sw-vitrina-media">' +
                            '<img src="' + (p.imagen || p.foto) + '" alt="' + p.nombre + '" loading="lazy">' +
                            '<span class="sw-vitrina-badge">Ver ficha</span>' +
                        '</div>' +
                        '<div class="sw-vitrina-info">' +
                            '<strong>' + p.nombre + '</strong>' +
                            '<div class="sw-vitrina-meta">' +
                                '<span class="sw-vitrina-brand">' + (p.marca || "Armonía") + '</span>' +
                                precioHtml +
                            '</div>' +
                        '</div>';
                    track.appendChild(a);
                });
                wrap.appendChild(track); props.insertAdjacentElement("afterend", wrap);
            }
        }
        var now = new Date();
        var open = now.getDay() >= 1 && now.getDay() <= 6 && now.getHours() >= 8 && now.getHours() < 18;
        var pills = document.querySelector(".sw-topbar-pills span:last-child");
        if (pills) pills.textContent = open ? "León abierto ahora · hasta las 6:00 pm" : "León cerrado · abre lunes a sábado 8:00 am";
        document.querySelectorAll(".sw-product").forEach(function (card) {
            if (card.querySelector(".sw-prima-tag")) return;
            var price = card.querySelector(".sw-product-price"); if (!price) return;
            var num = parseFloat((price.textContent || "").replace(/[^\d.]/g, "")); if (!num) return;
            var tag = document.createElement("p"); tag.className = "sw-prima-tag";
            tag.textContent = "Aparta desde $" + Math.round(num * 0.2) + " USD";
            price.insertAdjacentElement("afterend", tag);
        });
        if (!document.querySelector(".sw-bandas")) {
            var cat = document.getElementById("catalogo");
            if (cat) {
                var band = document.createElement("section"); band.className = "sw-bandas";
                band.innerHTML = '<div class="sw-container"><p class="sw-vitrina-label" style="padding-left:0">Temporada de bandas escolares</p><h2 class="sw-title">Liras, tenores, redoblantes y bajos. Se arma el combo en sucursal.</h2><p class="sw-subtitle">Es lo que más piden colegios en León. Cotiza el paquete por WhatsApp.</p><a class="sw-btn sw-btn-primary" target="_blank" rel="noopener" href="https://wa.me/50589379316?text=' + encodeURIComponent("Hola Armonía, quiero cotizar instrumentos para banda escolar.") + '">Cotizar banda escolar</a></div>';
                cat.insertAdjacentElement("afterend", band);
            }
        }
    });
})();
