/* ==========================================
   Mundo LuFiNas
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Animação de entrada dos botões
    const botoes = document.querySelectorAll(".botao");

    botoes.forEach((botao, index) => {

        botao.style.opacity = "0";
        botao.style.transform = "translateY(20px)";

        setTimeout(() => {

            botao.style.transition = "all .5s ease";
            botao.style.opacity = "1";
            botao.style.transform = "translateY(0)";

        }, 250 + (index * 120));

    });

    // Pequeno efeito ao clicar
    botoes.forEach(botao => {

        botao.addEventListener("mousedown", () => {
            botao.style.transform = "scale(.97)";
        });

        botao.addEventListener("mouseup", () => {
            botao.style.transform = "";
        });

        botao.addEventListener("mouseleave", () => {
            botao.style.transform = "";
        });

    });

});
