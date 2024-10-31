class PlanCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
        shadow.appendChild(this.importIconLibrary()); // Importa a biblioteca de ícones
    }

    importIconLibrary() {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css');
        return link; // Retorna o elemento <link> para ser adicionado ao Shadow DOM
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'plan-card');

        // Parte superior (Header) com um ícone
        const planHeader = document.createElement('div');
        planHeader.setAttribute('class', 'plan-header');

        // Obtém a classe do ícone ou usa uma classe padrão
        const iconClass = this.getAttribute('icon');

        // Cria o elemento <i> para o ícone
        const icon = document.createElement('i');
        icon.setAttribute('class', iconClass); // Define a classe do ícone

        // Adiciona o ícone e o título ao cabeçalho
        planHeader.appendChild(icon); // Adiciona o ícone ao cabeçalho
        const title = document.createElement('h1');
        title.textContent = this.getAttribute('title');
        planHeader.appendChild(title); // Adiciona o título ao cabeçalho

        componentRoot.appendChild(planHeader);
        

        // Descrição
        const description = document.createElement('p');
        description.textContent = this.getAttribute('description');
        componentRoot.appendChild(description);

        // Preço
        const price = document.createElement('div');
        price.setAttribute('class', 'price');
        const priceValue = document.createElement('span');
        priceValue.setAttribute('class', 'price-value');
        priceValue.textContent = this.getAttribute('price');
        const pricePeriod = document.createElement('span');
        pricePeriod.setAttribute('class', 'price-period');
        pricePeriod.textContent = this.getAttribute('period');
        price.appendChild(priceValue);
        price.appendChild(pricePeriod);
        componentRoot.appendChild(price);

        // Informação adicional de faturamento
        const billingInfo = document.createElement('p');
        billingInfo.setAttribute('class', 'billing-info');
        billingInfo.textContent = this.getAttribute('billingInfo');
        componentRoot.appendChild(billingInfo);

        // Botão
        const button = document.createElement('button');
        button.textContent = 'Comprar';
        componentRoot.appendChild(button);

        button.addEventListener('click', () => {
            const refValue = this.getAttribute('ref');

            setTimeout(() => {
                window.open(refValue, '_blank');
            }, 150);
        });

        // Lista de recursos
        const features = document.createElement('ul');
        const featureList = this.getAttribute('features') ? this.getAttribute('features').split(',') : [];
        featureList.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            features.appendChild(li);
        });
        componentRoot.appendChild(features);

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
            .plan-card {
                background-color: #fff;
                border: 2px solid #7b6ba3;
                border-radius: 12px;
                text-align: center;
                width: 290px;
                height: 450px;
                font-family: Arial, sans-serif;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                position: relative;
                overflow: hidden;
                padding: 20px;
            }

            .plan-header i {
                font-size: 30px; /* Tamanho do ícone */
                color: #f9e285;
                margin-bottom: 5px;
            }

            .plan-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            }

            .plan-header {
                background-color: #4a2f82;
                padding: 15px;
                color: white;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: -20px -20px 20px;
            }

            h1 {
                font-size: 1.5rem;
                margin: 0;
                color: white;
            }

            p {
                font-size: 1rem;
                color: #555;
                margin-bottom: 15px;
            }

            .price {
                display: flex;
                justify-content: center;
                align-items: baseline;
                margin-bottom: 10px;
            }

            .price-value {
                font-size: 2rem;
                font-weight: bold;
                color: #4a2f82;
            }

            .price-period {
                font-size: 0.9rem;
                color: #888;
                margin-left: 5px;
            }

            .billing-info {
                font-size: 0.9rem;
                color: #888;
                margin-bottom: 20px;
            }

            button {
                background-color: #4a2f82;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1rem;
                transition: background-color 0.3s ease;
                width: 100%;
                max-width: 250px;
                margin: 0 auto;
            }

            button:hover {
                background-color: #36285b;
            }

            ul {
                list-style-type: none;
                padding: 0;
                margin-top: 20px;
                margin-bottom: 0;
            }

            ul li {
                font-size: 0.9rem;
                color: #555;
                text-align: left;
                padding-left: 20px;
                margin-bottom: 5px;
                position: relative;
            }

            ul li::before {
                content: '✓';
                color: #4a2f82;
                font-weight: bold;
                position: absolute;
                left: 0;
            }

            @media (mix-width: 800px) {
                .plan-card {
                    padding: 15px;
                    width: auto;
                }

                h1 {
                    font-size: 1.5rem;
                }

                .price-value {
                    font-size: 1.5rem;
                }

                button {
                    padding: 8px 16px;
                    font-size: 0.9rem;
                }
            }
        `;
        return style;
    }
}

customElements.define('plan-card', PlanCard);
