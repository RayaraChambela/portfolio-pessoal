// =========================================================
// 1. Ano corrente no rodapé
// =========================================================
document.getElementById("ano-atual").textContent = new Date().getFullYear();

// =========================================================
// 2. Menu responsivo (hambúrguer). Os ícones alternam via CSS
//    a partir de aria-expanded.
// =========================================================
const nav = document.getElementById("nav");
const navToggle = document.getElementById("nav-toggle");

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}

navToggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

// Esc fecha o menu e devolve o foco ao botão
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    setMenu(false);
    navToggle.focus();
  }
});

// Fecha o menu ao clicar em um link (útil no mobile)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// =========================================================
// 3. Tema claro/escuro com persistência
// =========================================================
const THEME_KEY = "portfolio-theme";
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  if (theme === "dark") root.setAttribute("data-theme", "dark");
  else root.removeAttribute("data-theme");
}

function toggleTheme() {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* armazenamento indisponível */ }
  return next;
}

let savedTheme = null;
try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) { /* ignora */ }
applyTheme(savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

themeToggle.addEventListener("click", toggleTheme);

// =========================================================
// 4. Validação do formulário de contato
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
  }
  wrapper.classList.add("has-error");
  errorEl.textContent = result;
  field.setAttribute("aria-invalid", "true");
  return false;
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
    const firstInvalid = fields.find((f) => f.getAttribute("aria-invalid") === "true");
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  // Sem back-end: em vez de simular um envio, abre o app de e-mail do
  // visitante já preenchido. É uma ação real, não uma resposta fabricada.
  const nome = form.elements.nome.value.trim();
  const email = form.elements.email.value.trim();
  const mensagem = form.elements.mensagem.value.trim();
  const assunto = encodeURIComponent(`Contato via portfólio: ${nome}`);
  const corpo = encodeURIComponent(`${mensagem}\n\n${nome} (${email})`);

  // Não limpa o formulário: quem usa webmail pode não ter app de e-mail
  // configurado, e apagar o que foi digitado seria perder a mensagem.
  formStatus.textContent = "Tentei abrir seu app de e-mail. Se nada abriu, use o botão Copiar e-mail e escreva para rachambela@gmail.com.";
  formStatus.classList.add("is-success");

  window.location.href = `mailto:rachambela@gmail.com?subject=${assunto}&body=${corpo}`;
});

// =========================================================
// 5. Copiar e-mail (alternativa ao mailto:)
// =========================================================
const copyBtn = document.getElementById("copy-email");
const copyStatus = document.getElementById("copy-status");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("rachambela@gmail.com");
      copyStatus.textContent = "E-mail copiado.";
    } catch (e) {
      copyStatus.textContent = "Não consegui copiar. O endereço é rachambela@gmail.com.";
    }
  });
}
