const navMenuId = 'nav-menu'; // ID do menu
const navToggleId = 'nav-toggle'; // ID do botão de toggle
let menuActive = false; // Controle do estado do menu

const navMenu = document.getElementById(navMenuId);
const navToggle = document.getElementById(navToggleId);
const navClose = document.getElementById('nav-close'); // ID do botão de fechar

// Função para abrir o menu
const openMenu = () => {
    navMenu.classList.add('show-menu');
    navToggle.classList.add('hidden-toggle');
    navClose.classList.add('show-close');
    menuActive = true; // O menu está ativo
};

// Função para fechar o menu
const closeMenu = () => {
    navMenu.classList.remove('show-menu');
    navToggle.classList.remove('hidden-toggle');
    navClose.classList.remove('show-close');
    menuActive = false; // O menu não está ativo
};

// Adiciona eventos aos botões
if (navToggle) {
    navToggle.addEventListener('click', openMenu);
}

if (navClose) {
    navClose.addEventListener('click', closeMenu);
}

// Função para remover o menu ao clicar fora
const removeMenuOnClickOutside = (navId, toggleId) => {
    const nav = document.getElementById(navId);
    const toggle = document.getElementById(toggleId);

    document.addEventListener('click', (e) => {
        if (menuActive && !nav.contains(e.target) && !toggle.contains(e.target)) {
            closeMenu(); // Fecha o menu
        }
    });
};

// Chama a função para habilitar a remoção do menu ao clicar fora
removeMenuOnClickOutside(navMenuId, navToggleId);

// Ativar e remover classe active nos links
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    navLinks.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    // Remove o menu se ele estiver ativo
    if (menuActive) {
        setTimeout(() => {
            closeMenu();
        },300);
        
    }
}

navLinks.forEach(n => n.addEventListener('click', linkAction));


/* background */

const bgHeader = () =>{
    const header = document.getElementById('header');
    if(this.scrollY >= 50){
        header.classList.add('bg-header');
    }else{
        header.classList.remove('bg-header');
    }
}
window.addEventListener('scroll', bgHeader)
bgHeader()




const productContainers = [...document.querySelectorAll('.content')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    const cards = item.querySelectorAll('.service-card');
    const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginRight);

    let scrollAmount = 0;

    nxtBtn[i].addEventListener('click', () => {
        const maxScrollLeft = item.scrollWidth - item.clientWidth;

        // Ajusta o valor máximo de scroll, desconsiderando a margem do último card
        const adjustedMaxScrollLeft = maxScrollLeft - parseInt(window.getComputedStyle(cards[cards.length - 1]).marginRight);

        // Adiciona a condição para verificar a largura da tela
        if (window.innerWidth <= 1800) {
            if (scrollAmount < adjustedMaxScrollLeft) {
                scrollAmount += cardWidth;
                item.scrollLeft = scrollAmount;
            }
        } else {
            // Comportamento ajustado para larguras acima de 1150px
            const largerScrollStep = cardWidth * 1.5; // Ajusta o passo para uma rolagem maior em telas largas

            if (scrollAmount < adjustedMaxScrollLeft) {
                scrollAmount += largerScrollStep; // Usa o passo maior
                item.scrollLeft = scrollAmount;
            }
        }
    });

    preBtn[i].addEventListener('click', () => {
        const scrollStep = window.innerWidth <= 1150 ? cardWidth : cardWidth * 1.5;

        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            item.scrollLeft = scrollAmount;
        }
    });
});

const scrollUpButton = document.querySelector('.scrollup');
const homeHeight = document.querySelector('.home').offsetHeight; // A altura da seção home

window.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight) {
        scrollUpButton.classList.add('show');
    } else {
        scrollUpButton.classList.remove('show');
    }
});

scrollUpButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente para o topo
    scrollUpButton.classList.remove('show'); // Remove a classe após o clique

    // Adiciona `no-hover` para desativar o hover temporariamente
    scrollUpButton.classList.add('no-hover');
    
    // Remove `no-hover` após uma breve pausa
    setTimeout(() => {
        scrollUpButton.classList.remove('no-hover');
    }, 10); // Ajuste o tempo conforme necessário
});


/* email */
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('carolina_msg', 'template_0arujqf', '#contact-form', 'byEHQOGTQfHE3KLBp')
    .then(() => {   
        contactMessage.textContent = 'Mensagem enviada com sucesso! ✔';
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        contactForm.reset();
    }); // Corrigido fechamento aqui
}

contactForm.addEventListener('submit', sendEmail);

