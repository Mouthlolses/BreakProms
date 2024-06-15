"use strict";
// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.nav-link');
// Função para remover a classe 'active' de todos os links
function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}
// Adiciona um evento de clique a cada link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o comportamento padrão do link
        removeActiveClass(); // Remove a classe 'active' de todos os links
        link.classList.add('active'); // Adiciona a classe 'active' ao link clicado
    });
});
