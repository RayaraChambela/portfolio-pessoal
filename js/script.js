// =========================================================
// 1. Ano corrente no rodapé
// =========================================================
document.getElementById("ano-atual").textContent = new Date().getFullYear();

// =========================================================
// 2. Menu responsivo (hambúrguer) — RF10
// =========================================================
const nav = document.getElementById("nav");
const navToggle = document.getElementById("nav-toggle");

const navToggleIcon = navToggle.querySelector("span");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  navToggleIcon.textContent = isOpen ? "✕" : "☰";
});

// Fecha o menu ao clicar em um link (útil no mobile)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menu");
    navToggleIcon.textContent = "☰";
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
    filterButtons.forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-pressed", "true");

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
    field.setAttribute("aria-invalid", "false");
    return true;
  } else {
    wrapper.classList.add("has-error");
    errorEl.textContent = result;
    field.setAttribute("aria-invalid", "true");
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

  // Sem back-end nesta entrega: em vez de simular um envio bem-sucedido (o que
  // enganaria quem preenche o formulário achando que a mensagem chegou), abrimos
  // o app de e-mail do visitante já preenchido com os dados digitados. É uma ação
  // real, não uma resposta fabricada — ver docs/02-requisitos.md para a próxima
  // entrega com um serviço real (ex.: Formspree, EmailJS) via fetch().
  const nome = form.elements.nome.value.trim();
  const email = form.elements.email.value.trim();
  const mensagem = form.elements.mensagem.value.trim();
  const assunto = encodeURIComponent(`Contato via portfólio — ${nome}`);
  const corpo = encodeURIComponent(`${mensagem}\n\n— ${nome} (${email})`);

  formStatus.textContent = "Abrindo seu app de e-mail para enviar a mensagem a rachambela@gmail.com...";
  formStatus.classList.add("is-success");

  window.location.href = `mailto:rachambela@gmail.com?subject=${assunto}&body=${corpo}`;
  form.reset();
});
