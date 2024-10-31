class Projects extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

        // Adiciona o evento de clique para o flip
        this.addEventListeners();
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'projects');
    
        const componentFlip = document.createElement('div');
        componentFlip.setAttribute('class', 'flip');
    
        const componentFront = document.createElement('div');
        componentFront.setAttribute('class', 'flip__front');
    
        const componentBack = document.createElement('div');
        componentBack.setAttribute('class', 'flip__back');
    
        const projectsImg = document.createElement('img');
        projectsImg.src = this.getAttribute('img-one');
    
        const projectsImgTwo = document.createElement('img');
        projectsImgTwo.src = this.getAttribute('img-two');
    
        // Criação da imagem de toque
        const touchIcon = document.createElement('img');
        touchIcon.src = '/assets/touch.png'; // Caminho da imagem
        touchIcon.setAttribute('class', 'touch-icon');
    
        const projectsSubtitle = document.createElement('span');
        projectsSubtitle.setAttribute('class', 'subtitle');
        projectsSubtitle.textContent = this.getAttribute('subtitle');
    
        const projectsTitle = document.createElement('h2');
        projectsTitle.textContent = this.getAttribute('title');
    
        const projectsData = document.createElement('span');
        projectsData.textContent = this.getAttribute('data');
    
        const projectsText = document.createElement('p');
        projectsText.textContent = this.getAttribute('text');
    
        componentFlip.appendChild(componentFront);
        componentFlip.appendChild(componentBack);
        componentRoot.appendChild(componentFlip);
    
        componentFront.appendChild(projectsImg);
        componentFront.appendChild(touchIcon); // Adiciona o ícone de toque na parte frontal
    
        componentBack.appendChild(projectsImgTwo);
    
        componentRoot.appendChild(projectsSubtitle);
        componentRoot.appendChild(projectsTitle);
        componentRoot.appendChild(projectsData);
        componentRoot.appendChild(projectsText);
    
        return componentRoot;
    }

    addEventListeners() {
        const flipCard = this.shadowRoot.querySelector('.flip');
        
        // Alterna a classe 'flipped' ao clicar para ativar/desativar o flip
        flipCard.addEventListener('click', () => {
            flipCard.classList.toggle('flipped');
        });
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
            .projects {
                width: 300px;
                height: 25rem;
                display: flex;
                flex-direction: column;
                background-color: #f9f9f9;
                border: 2px solid #f9e285;
                border-radius: 8px;
                margin: 1rem;
            }
    
            .flip {
                width: 100%;
                height: 100%;
                perspective: 1000px;
                position: relative;
            }
    
            .flip__front, .flip__back {
                width: 100%;
                height: 100%;
                position: absolute;
                backface-visibility: hidden;
                transition: transform 0.6s;
            }
    
            .flip__front {
                transform: rotateY(0deg);
            }
    
            .flip__back {
                transform: rotateY(180deg);
                position: absolute;
                top: 0;
                left: 0;
            }
    
            .flipped .flip__front {
                transform: rotateY(-180deg);
            }
    
            .flipped .flip__back {
                transform: rotateY(0deg);
            }
    
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
    
            .touch-icon {
                width: 30px;
                height: 30px;
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
            }
    
            h2, span, p {
                padding: 0rem 1rem;
            }
    
            h2 {
                font-size: 24px;
                font-weight: bold;
            }
    
            span {
                font-size: 16px;
                color: gray;
            }
    
            span.subtitle {
                margin-top: 1rem;
            }
    
            p {
                font-size: 18px;
                color: #333;
                max-width: 300px;
                margin-bottom: 2rem;
            }
        `;
        return style;
    }
}

customElements.define('project-component', Projects);
