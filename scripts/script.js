function alternarMenu() {
    const menu = document.getElementById('menu-nav');
    const botaoMenu = document.querySelector('.botao-menu');

    menu.classList.toggle('oculto');
    botaoMenu.classList.toggle('menu-ativo');
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.conteudo').forEach(secao => {
            secao.classList.add('d-none');
        });

        const secaoId = this.getAttribute('data-section');
        document.getElementById(secaoId).classList.remove('d-none');
    });
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const secaoId = this.getAttribute('data-section');
        const secao = document.getElementById(secaoId);

        secao.scrollIntoView({ behavior: 'smooth' });

        document.querySelectorAll('.conteudo').forEach(secao => {
            secao.classList.add('d-none');
        });

        secao.classList.remove('d-none');
    });
});

function toggleTheme() {
    const body = document.body;
    const header = document.querySelector('header');

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
    }
});