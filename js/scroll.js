document.querySelectorAll(".carrusel").forEach(carrusel => {

    const contenedor = carrusel.querySelector(".secDeNoticias");
    const izquierda = carrusel.querySelector(".izquierda");
    const derecha = carrusel.querySelector(".derecha");

    derecha.addEventListener("click", () => {

        const noticia = contenedor.querySelector("article");
        const paso = noticia.offsetWidth + 20; // 20 es el gap

        if (contenedor.scrollLeft + contenedor.clientWidth >= contenedor.scrollWidth - 5) {

            contenedor.scrollTo({
                left: 0,
                behavior: "smooth"
            });

        } else {

            contenedor.scrollBy({
                left: paso,
                behavior: "smooth"
            });

        }

    });

    izquierda.addEventListener("click", () => {

        const noticia = contenedor.querySelector("article");
        const paso = noticia.offsetWidth + 20;

        if (contenedor.scrollLeft <= 5) {

            contenedor.scrollTo({
                left: contenedor.scrollWidth,
                behavior: "smooth"
            });

        } else {

            contenedor.scrollBy({
                left: -paso,
                behavior: "smooth"
            });

        }

    });

});