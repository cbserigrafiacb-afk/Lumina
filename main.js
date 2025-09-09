// Año dinámico en el footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// Envío del formulario via mailto (simple, sin backend)
const form = document.getElementById('contact-form');
if (form) {
form.addEventListener('submit', (e) => {
e.preventDefault();
const data = new FormData(form);
const name = data.get('name') || '';
const phone = data.get('phone') || '';
const email = data.get('email') || '';
const message = data.get('message') || '';


const to = 'info@lumina.example'; // TODO: Cambia por tu correo real
const subject = encodeURIComponent('Consulta desde la web Lumina');
const body = encodeURIComponent(
`Nombre: ${name}\nTeléfono: ${phone}\nEmail: ${email}\n\nMensaje:\n${message}`
);


window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});
}
