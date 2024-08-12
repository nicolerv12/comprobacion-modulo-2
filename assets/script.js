


document.addEventListener('DOMContentLoaded', () => {
    const skillTitles = document.querySelectorAll('.skill-title');
    
    skillTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;

            
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.getElementById('showMore');
    const moreInfo = document.getElementById('moreInfo');

    showMoreButton.addEventListener('click', function() {
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden');
            showMoreButton.textContent = 'Leer menos';
        } else {
            moreInfo.classList.add('hidden');
            showMoreButton.textContent = 'Leer más';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let isValid = true;

        // limpiar mensajes  errores
        document.querySelectorAll(".invalid-feedback").forEach(el => el.classList.add("d-none"));
        form.querySelectorAll(".form-control").forEach(el => el.classList.remove("is-invalid"));

        // validar nombre
        if (nameInput.value.trim() === "") {
            isValid = false;
            nameInput.classList.add("is-invalid");
            document.getElementById("nameError").classList.remove("d-none");
        }

        // validar correo electrónico
        if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            isValid = false;
            emailInput.classList.add("is-invalid");
            document.getElementById("emailError").classList.remove("d-none");
        }

        // validar mensaje
        if (messageInput.value.trim() === "") {
            isValid = false;
            messageInput.classList.add("is-invalid");
            document.getElementById("messageError").classList.remove("d-none");
        }

        // mostrar éxito si todo es válido
        if (isValid) {
            form.reset(); 
            successMessage.classList.remove("d-none");
        }
    });
});

// proyectos
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            
            cards.forEach(c => c.classList.remove('active'));
            
            // Luego añade la clase active a la tareta
            card.classList.add('active');
        });
    });
});