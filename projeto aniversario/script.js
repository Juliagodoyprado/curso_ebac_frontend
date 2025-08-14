document.addEventListener('DOMContentLoaded', function() {
    // Configura a data do evento (17 de julho de 2023)
    const eventDate = new Date('July 17, 2023 00:00:00').getTime();
    
    // Atualiza o countdown a cada segundo
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        // Cálculos para dias, horas, minutos e segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Exibe o resultado no elemento com id="countdown"
        document.getElementById('countdown').innerHTML = `
            <div>
                <span>${days}</span>
                <span class="countdown-label">Dias</span>
            </div>
            <div>
                <span>${hours}</span>
                <span class="countdown-label">Horas</span>
            </div>
            <div>
                <span>${minutes}</span>
                <span class="countdown-label">Minutos</span>
            </div>
            <div>
                <span>${seconds}</span>
                <span class="countdown-label">Segundos</span>
            </div>
        `;
        
        // Se o countdown terminar
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = "O evento começou!";
        }
    }, 1000);
    
    // Formulário RSVP
    const rsvpForm = document.getElementById('rsvp-form');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const guests = document.getElementById('guests').value;
            
            // Aqui você normalmente enviaria os dados para um servidor
            // Vamos apenas mostrar um alerta para demonstração
            alert(`Obrigado, ${name}! Sua presença foi confirmada para o evento. ${guests > 0 ? `Você levará ${guests} acompanhante(s).` : ''}`);
            
            // Limpa o formulário
            rsvpForm.reset();
        });
    }
    
    // Animação de scroll suave para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});