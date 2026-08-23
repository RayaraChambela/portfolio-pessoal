// =========================================================
// 1. Ano corrente no rodapé
// =========================================================
document.getElementById("ano-atual").textContent = new Date().getFullYear();

// =========================================================
// 2. Menu responsivo (hambúrguer) — RF10
// =========================================================
const nav = document.getElementById("nav");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Fecha o menu ao clicar em um link (útil no mobile)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// =========================================================
// 3. Tema claro/escuro com persistência — RF09
// =========================================================
const THEME_KEY = "portfolio-theme";
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    themeToggle.querySelector("span").textContent = "☀️";
  } else {
    root.removeAttribute("data-theme");
    themeToggle.querySelector("span").textContent = "🌙";
  }
}

const savedTheme =
  localStorage.getItem(THEME_KEY) ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
});

// =========================================================
// 4. Filtro de projetos por tecnologia — RF05
// =========================================================
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const emptyState = document.getElementById("empty-state");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const filter = btn.dataset.filter;
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      const matches = filter === "todos" || tags.includes(filter);
      card.style.display = matches ? "" : "none";
      if (matches) visibleCount++;
    });

    emptyState.hidden = visibleCount !== 0;
  });
});

// =========================================================
// 5. Validação do formulário de contato — RF07 / RF13
// =========================================================
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

const validators = {
  nome: (value) => value.trim().length >= 2 || "Informe seu nome completo.",
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || "Informe um e-mail válido.",
  mensagem: (value) => value.trim().length >= 10 || "Escreva uma mensagem com pelo menos 10 caracteres.",
};

function validateField(field) {
  const errorEl = form.querySelector(`[data-error-for="${field.name}"]`);
  const result = validators[field.name](field.value);
  const wrapper = field.closest(".field");

  if (result === true) {
    wrapper.classList.remove("has-error");
    errorEl.textContent = "";
    return true;
  } else {
    wrapper.classList.add("has-error");
    errorEl.textContent = result;
    return false;
  }
}

// Valida ao sair do campo (blur), para feedback progressivo
Object.keys(validators).forEach((name) => {
  const field = form.elements[name];
  field.addEventListener("blur", () => validateField(field));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = Object.keys(validators).map((name) => form.elements[name]);
  const allValid = fields.map(validateField).every(Boolean);

  if (!allValid) {
    formStatus.textContent = "Corrija os campos destacados antes de enviar.";
    formStatus.classList.remove("is-success");
    return;
  }

  // Nesta entrega não há back-end: o envio é simulado (ver docs/02-requisitos.md).
  // Para uma próxima entrega, plugar aqui um serviço real (ex.: Formspree, EmailJS)
  // usando fetch() para enviar form.elements.nome/email/mensagem.
  formStatus.textContent = "Mensagem enviada! (envio simulado nesta entrega)";
  formStatus.classList.add("is-success");
  form.reset();
});
