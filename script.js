document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add subtle animation to services
    const services = document.querySelectorAll('.servico');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    services.forEach(service => {
        service.style.opacity = '0';
        service.style.transform = 'translateY(20px)';
        observer.observe(service);

        // Add WhatsApp link to each service
        service.addEventListener('click', () => {
            const serviceName = service.getAttribute('data-service');
            const whatsappNumber = '5516990502191';
            const whatsappMessage = encodeURIComponent(`Olá, gostaria de mais informações sobre o serviço de ${serviceName}`);
            window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
        });
    });
});