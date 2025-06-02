// JavaScript personalizado para o projeto

// Inicialização do carrossel
document.addEventListener('DOMContentLoaded', function() {
    const myCarousel = document.querySelector('#carouselExampleIndicators');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        wrap: true,
        pause: 'hover'
    });
    
    // Adiciona efeito de hover nos cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
        
        // Opcional: adicionar clique nos cards
        card.addEventListener('click', function() {
            const link = this.querySelector('a');
            if (link) {
                window.open(link.href, '_blank');
            }
        });
    });
    
    // Melhorar acessibilidade
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
        item.setAttribute('aria-label', `Slide ${index + 1}`);
    });
    
    console.log('Galeria profissional carregada com sucesso!');
});

// Função para rolar suavemente para o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Adiciona um botão de voltar ao topo (opcional)
window.addEventListener('scroll', function() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.title = 'Voltar ao topo';
    scrollTopBtn.onclick = scrollToTop;
    
    if (window.pageYOffset > 300 && !document.getElementById('scrollTopBtn')) {
        document.body.appendChild(scrollTopBtn);
    } else if (window.pageYOffset <= 300 && document.getElementById('scrollTopBtn')) {
        document.getElementById('scrollTopBtn').remove();
    }
});

// Estilo dinâmico para o botão de voltar ao topo
const style = document.createElement('style');
style.innerHTML = `
    #scrollTopBtn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #0d6efd;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.9;
        transition: opacity 0.3s;
    }
    
    #scrollTopBtn:hover {
        opacity: 1;
    }
`;
document.head.appendChild(style);