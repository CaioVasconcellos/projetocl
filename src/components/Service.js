class Service extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles()); 
    }

    build () {

        const componentRoot = document.createElement('div');
            componentRoot.setAttribute('class', 'service');
    
            const serviceImg = document.createElement('img');
            serviceImg.src = this.getAttribute('img');
    
            const serviceTitle = document.createElement('h1');
                serviceTitle.textContent = this.getAttribute('title');
    
            const serviceText = document.createElement('p');
                serviceText.textContent = this.getAttribute('text');

            const serviceButton = document.createElement('button');
            serviceButton.textContent = 'Saiba mais'

            serviceButton.addEventListener('click', () => {
                const refValue = this.getAttribute('ref');
            
                setTimeout(() => {
                    window.open(refValue, '_blank');
                }, 150);
            });

    

            componentRoot.appendChild(serviceImg);
            componentRoot.appendChild(serviceTitle);
            componentRoot.appendChild(serviceText);
            componentRoot.appendChild(serviceButton);
    
            return componentRoot;
    }

    styles() {

        const style = document.createElement('style');
        style.textContent = `

     .service {
            background-color: #fff;
            width: 280px;
            height: 400px;
            border-radius: 12px;
            box-shadow: 2px 2px 5px #7b6ba3;
            display: flex;
            border: 2px solid #7b6ba3;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
            
            
            
        }

        .service img {
            width: auto;
            height: 250px;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            top: -1.5rem;
            position: absolute;
            object-fit: cover;
            
        }

      

        .service h1 {
            position: absolute;
            font-size: 1.2rem;
            text-align: center;
            color: #7b6ba3;
            border-bottom: 2px solid #7b6ba3;
            bottom: 7rem;
        }

        .service p {
            font-size: 0.8rem;
            text-align: center;
            position: relative;
            margin: 0.5rem 2rem 4rem;
            bottom: -8.5rem;
        } 

        .service button {
            background-color: #7b6ba3;
            height: 40px;
            border: none;
            padding: 4px;
            width: 80%;
            color: #fff;
            font-size: 1.2rem;
            font-weight: bold;
            border-radius: 4px;
            display: flex; /* Para garantir que o conteúdo dentro do botão seja flexível */
            justify-content: center; /* Alinha o texto do botão ao centro */
            align-items: center; /* Alinha verticalmente o texto do botão */
            position: absolute;
            bottom: 1rem;
      
    
        }

        .service button:hover {
            background-color: #7b6ba3;
            cursor: pointer;
        }

        @media (max-width: 340px) {
            .service {
                width: 250px;
                height: 380px;
            }

            .service img {
                height: 230px;
            }

            .service h1 {
                font-size: 1.0rem;
            }

            .service p {
                font-size: 0.8rem;
            }

            .service button {
                height: 30px;
                font-size: 1rem;
                bottom: 1.2rem;

            }

        }
    `;

        return style;
}

}

customElements.define('service-card', Service);



