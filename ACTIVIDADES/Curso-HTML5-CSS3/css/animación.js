window.addEventListener("load", () => {
    // Primera chincheta
    const chincheta1 = document.querySelector("#chincheta1");
    chincheta1.classList.add("mueveChincheta1");

    chincheta1.addEventListener("animationend", () => {
        const article1 = document.querySelector("article:nth-of-type(1)");
        article1.classList.add("article1");

        article1.addEventListener("animationend", () => {
            const chincheta2 = document.querySelector("#chincheta2");
            chincheta2.classList.add("chincheta2");

            chincheta2.addEventListener("animationend", () => {
                const chincheta3 = document.querySelector("#chincheta3");
                chincheta3.classList.add("chincheta3");
            }, { once: true }); 
        }, { once: true }); // Esto sirve para que solamente se jecute solo una vez
    }, { once: true }); 
    
    const chincheta3 = document.querySelector("#chincheta3");
    chincheta3.classList.add("mueveChincheta3");
    chincheta3.addEventListener("animationend", () => {
        const article3 = document.querySelector("article:nth-of-type(3)");
        article3.classList.add("article3");
    }, { once: true });
});

