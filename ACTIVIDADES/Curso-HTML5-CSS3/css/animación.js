window.addEventListener("load", () => {
    // Primera chincheta
    const chincheta1 = document.querySelector("#chincheta1");
    chincheta1.classList.add("mueveChincheta1");

    // Escucha el final de la animación de la primera chincheta
    chincheta1.addEventListener("animationend", () => {
        // Animar el primer <article>
        const article1 = document.querySelector("article:nth-of-type(1)");
        article1.classList.add("article1");

        // Escucha el final de la animación del primer <article>
        article1.addEventListener("animationend", () => {
            // Animar la segunda chincheta
            const chincheta2 = document.querySelector("#chincheta2");
            chincheta2.classList.add("chincheta2");

            // Escucha el final de la animación de la segunda chincheta
            chincheta2.addEventListener("animationend", () => {
                // Animar la tercera chincheta
                const chincheta3 = document.querySelector("#chincheta3");
                chincheta3.classList.add("chincheta3");
            }, { once: true }); // Ejecutar solo una vez
        }, { once: true }); // Ejecutar solo una vez
    }, { once: true }); // Ejecutar solo una vez
    
    const chincheta3 = document.querySelector("#chincheta3");
    chincheta3.classList.add("mueveChincheta3");
    chincheta3.addEventListener("animationend", () => {
        // Animar el tercer <article> después de la animación de la chincheta
        const article3 = document.querySelector("article:nth-of-type(3)");
        article3.classList.add("article3");
    }, { once: true }); // Ejecutar solo una vez
});

