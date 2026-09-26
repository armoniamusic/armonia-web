/* Datos tomados de Facebook Armonia Music LEON — se aplica encima de app.js */
(function () {
    const TIGO = "+505 7874 9278";
    const TIKTOK_URL = "https://www.tiktok.com/@armoniamusic";

    if (typeof SUCURSALES !== "undefined") {
        SUCURSALES.splice(
            0,
            SUCURSALES.length,
            {
                id: 1,
                nombre: "Sucursal León (sede)",
                direccion: "Parque de los Poetas, 20 varas al este, León",
                telefono: "+505 8937 9316 · Tigo 7874 9278",
                horario: "Lun a Sáb · 8:00 am – 6:00 pm",
                mapsQuery: "Armonia Music Parque de los Poetas Leon Nicaragua",
                waLocal: "50589379316",
            },
            {
                id: 2,
                nombre: "Sucursal Chinandega",
                direccion: "Chinandega, Nicaragua",
                telefono: "+505 8937 9244",
                horario: "Lun a Sáb · consulta horario en sucursal",
                mapsQuery: "Armonia Music Chinandega Nicaragua",
                waLocal: "50589379244",
            },
            {
                id: 3,
                nombre: "Sucursal Estelí",
                direccion: "Estelí, Nicaragua",
                telefono: "+505 8937 9321",
                horario: "Lun a Sáb · consulta horario en sucursal",
                mapsQuery: "Armonia Music Esteli Nicaragua",
                waLocal: "50589379321",
            },
            {
                id: 4,
                nombre: "Sucursal Matagalpa",
                direccion: "Matagalpa, Nicaragua",
                telefono: "+505 8632 3793",
                horario: "Lun a Sáb · consulta horario en sucursal",
                mapsQuery: "Armonia Music Matagalpa Nicaragua",
                waLocal: "50586323793",
            },
            {
                id: 5,
                nombre: "Sucursal Jinotega",
                direccion: "Jinotega, Nicaragua",
                telefono: "+505 8933 6794",
                horario: "Lun a Sáb · consulta horario en sucursal",
                mapsQuery: "Armonia Music Jinotega Nicaragua",
                waLocal: "50589336794",
            }
        );
    }

    if (typeof FAQS !== "undefined") {
        FAQS.forEach(function (f) {
            if (f.pregunta && f.pregunta.indexOf("envíos") !== -1) {
                f.respuesta =
                    "Sí. Coordinamos envíos a todo el país. Sucursales en León (sede), Chinandega, Estelí, Matagalpa y Jinotega. Pregunta por WhatsApp el costo de encomienda.";
            }
        });
    }

    var originalCard = typeof sucursalCard === "function" ? sucursalCard : null;
    function sucursalCardConWa(s) {
        var html = originalCard ? originalCard(s) : "";
        if (!s.waLocal) return html;
        var wa = "https://wa.me/" + s.waLocal + "?text=" + encodeURIComponent("Hola Armonía, consulto disponibilidad en " + s.nombre + ".");
        return html.replace(/href="https:\/\/wa\.me\/[^"]+"/, 'href="' + wa + '"');
    }
    sucursalCard = sucursalCardConWa;
    window.sucursalCard = sucursalCardConWa;

    document.addEventListener("DOMContentLoaded", function () {
        var kicker = document.querySelector(".sw-hero-kicker");
        if (kicker) {
            kicker.textContent = "León · Chinandega · Estelí · Matagalpa · Jinotega";
        }

        var footerSocial = document.querySelector(".sw-footer-social");
        if (footerSocial && !footerSocial.querySelector("[data-tiktok]")) {
            var a = document.createElement("a");
            a.href = TIKTOK_URL;
            a.target = "_blank";
            a.rel = "noopener";
            a.setAttribute("data-tiktok", "1");
            a.textContent = "TikTok";
            footerSocial.appendChild(a);
        }

        var about = document.querySelector(".sw-about-text");
        if (about && !document.getElementById("swExtraOferta")) {
            var p = document.createElement("p");
            p.id = "swExtraOferta";
            p.innerHTML =
                "También rentamos <strong>audio y luces</strong> para eventos en cualquier parte de Nicaragua, y armamos bandas escolares (liras, tenores, redoblantes, bajos). León es la sede; el resto de sucursales atiende por WhatsApp local.";
            about.appendChild(p);
        }

        var telNum = document.getElementById("swContactTelNum");
        if (telNum) telNum.textContent = "+505 8937 9316 · Tigo " + TIGO.replace("+505 ", "");
    });
})();
