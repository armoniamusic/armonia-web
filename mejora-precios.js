/* Precio de referencia + simulador por producto (capa sobre app.js) */
(function () {
    const PRECIOS = {
        "yamaha-c40": 165,
        "palmer-les-paul": 220,
        "ibanez-gsr180": 280,
        "ukelele-palmer": 85,
        "violin-latina": 140,
        "yamaha-psre273": 195,
        "bateria-shadow": 420,
        "congas-5d2": 310,
        "bongo-5d2": 95,
        "timbales-maxtone": 240,
        "acordeon-latina": 380,
        "saxofon-alto": 360,
        "trompeta-lyonel": 210,
        "behringer-xm8500": 45,
        "parlante-kohlt": 280,
        "orange-crush12": 129,
        "fender-stratocaster": 850,
        "shure-sm58": 119,
        "boss-katana-50": 320,
        "casio-cts300": 175,
        "marshall-mg15": 119,
    };

    if (typeof PRODUCTOS === "undefined") return;
    PRODUCTOS.forEach(function (p) {
        if (PRECIOS[p.slug] != null) p.precioUsd = PRECIOS[p.slug];
    });

    function formatoUsd(n) {
        var num = Number(n);
        if (!Number.isFinite(num)) return "";
        return "$" + num.toLocaleString("en-US") + " USD";
    }
    function precioRef(p) {
        return Number.isFinite(Number(p && p.precioUsd)) ? Number(p.precioUsd) : null;
    }

    var originalCard = typeof productoCard === "function" ? productoCard : null;
    function productoCardConPrecio(p) {
        var html = originalCard ? originalCard(p) : "";
        if (precioRef(p) == null) return html;
        var price =
            '<p class="sw-product-price">' +
            formatoUsd(p.precioUsd) +
            " <span>ref. en tienda</span></p>";
        return html.replace(
            '<h3 class="sw-product-name">' + p.nombre + "</h3>",
            '<h3 class="sw-product-name">' + p.nombre + "</h3>\n        " + price
        );
    }
    productoCard = productoCardConPrecio;
    window.productoCard = productoCardConPrecio;

    var originalModal = window.abrirModalProducto;
    window.abrirModalProducto = function (idOrSlug, actualizarHash) {
        if (typeof originalModal === "function") originalModal(idOrSlug, actualizarHash);
        var p = PRODUCTOS.find(function (item) {
            return item.id == idOrSlug || item.slug === idOrSlug;
        });
        if (!p || precioRef(p) == null) return;
        var title = document.getElementById("swModalTitle");
        if (title && !document.querySelector(".sw-modal-price")) {
            var el = document.createElement("p");
            el.className = "sw-modal-price";
            el.innerHTML =
                formatoUsd(p.precioUsd) +
                " <span>precio de referencia · confirma en sucursal</span>";
            title.insertAdjacentElement("afterend", el);
        }
        var actions = document.querySelector(".sw-modal-actions-row");
        if (actions && !actions.querySelector("[data-simular]")) {
            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "sw-btn-modal-share";
            btn.setAttribute("data-simular", "1");
            btn.textContent = "Simular apartado";
            btn.addEventListener("click", function () {
                window.simularApartadoProducto(p.id);
            });
            actions.insertBefore(btn, actions.firstChild);
        }
    };

    window.simularApartadoProducto = function (id) {
        var p = PRODUCTOS.find(function (item) {
            return item.id == id;
        });
        var precio = precioRef(p);
        if (typeof cerrarModal === "function") cerrarModal();
        var slider = document.getElementById("swSimSlider");
        if (slider && precio != null) {
            var min = Number(slider.min) || 60;
            var max = Number(slider.max) || 1000;
            slider.value = Math.min(max, Math.max(min, precio));
            slider.dispatchEvent(new Event("input"));
            document.querySelectorAll("[data-preset-price]").forEach(function (b) {
                b.classList.remove("is-active");
            });
        }
        var sec = document.getElementById("planes");
        if (sec) sec.scrollIntoView({ behavior: "smooth" });
    };
})();
