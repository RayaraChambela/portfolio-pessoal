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
    return;
  }

  // Sem back-end: em vez de simular um envio, abre o app de e-mail do
  // visitante já preenchido. É uma ação real, não uma resposta fabricada.
  const nome = form.elements.nome.value.trim();
  const email = form.elements.email.value.trim();
  const mensagem = form.elements.mensagem.value.trim();
  const assunto = encodeURIComponent(`Contato via portfólio: ${nome}`);
  const corpo = encodeURIComponent(`${mensagem}\n\n${nome} (${email})`);

  formStatus.textContent = "Abrindo seu app de e-mail para enviar a mensagem a rachambela@gmail.com...";
  formStatus.classList.add("is-success");

  window.location.href = `mailto:rachambela@gmail.com?subject=${assunto}&body=${corpo}`;
  form.reset();
});

// =========================================================
// 5. Terminal interativo do hero
//    Todo o conteúdo é texto puro (textContent), sem innerHTML.
// =========================================================
(function initTerminal() {
  const log = document.getElementById("terminal-log");
  const termForm = document.getElementById("terminal-form");
  const input = document.getElementById("terminal-input");
  const hints = document.getElementById("terminal-hints");
  if (!log || !termForm || !input || !hints) return;

  const PROJECTS = [
    {
      name: "cantina-fatore",
      what: "gestão de estoque e vendas de uma cantina escolar",
      stack: "Python, Flask, MySQL, Tailwind",
      url: "https://github.com/belleruivo/cantina-fatore",
    },
    {
      name: "receitech",
      what: "site de receitas com CRUD completo e login",
      stack: "Node.js, Express, EJS, MySQL",
      url: "https://github.com/RayaraChambela/receitech-parte2",
    },
    {
      name: "reserva-de-salas",
      what: "app mobile para reservar salas, com perfil de administrador",
      stack: "React Native, TypeScript, Node.js, Prisma",
      url: "https://github.com/RayaraChambela/reservas-salas",
    },
  ];

  const history = [];
  let historyIndex = 0;

  function line(text, cls) {
    const p = document.createElement("p");
    p.className = "terminal__line" + (cls ? " " + cls : "");
    p.textContent = text;
    log.appendChild(p);
    return p;
  }

  function linkLine(prefix, label, href) {
    const p = line(prefix);
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    a.target = "_blank";
    a.rel = "noopener";
    p.appendChild(a);
  }

  const commands = {
    help() {
      line("comandos disponíveis:");
      line("  sobre     quem sou eu");
      line("  skills    linguagens e ferramentas");
      line("  projetos  o que já construí");
      line("  contato   como falar comigo");
      line("  tema      alterna claro/escuro");
      line("  clear     limpa a tela");
    },
    sobre() {
      line("Rayara Chambela");
      line("Estudante de Análise e Desenvolvimento de Sistemas no IFSP.");
      line("Projetos de sala em grupo, do banco de dados à interface.", "terminal__line--muted");
    },
    skills() {
      line("linguagens : C, Python, JavaScript, TypeScript, Java, SQL");
      line("back-end   : Node.js, Express, Flask, MySQL, Prisma");
      line("web/mobile : HTML, CSS, React, React Native");
      line("prática    : Git, MVC, CRUD, POO, UML");
    },
    projetos() {
      PROJECTS.forEach((p, i) => {
        line(`${i + 1}. ${p.name}: ${p.what}`);
        line(`   ${p.stack}`, "terminal__line--muted");
        linkLine("   ", p.url.replace("https://", ""), p.url);
      });
    },
    contato() {
      linkLine("e-mail : ", "rachambela@gmail.com", "mailto:rachambela@gmail.com");
      linkLine("github : ", "github.com/RayaraChambela", "https://github.com/RayaraChambela");
      linkLine("linkedin: ", "rayara-chambela-geronimo", "https://www.linkedin.com/in/rayara-chambela-geronimo-946944247/");
    },
    tema() {
      line(`tema ${toggleTheme() === "dark" ? "escuro" : "claro"} ativado.`);
    },
  };

  function run(raw) {
    const name = raw.trim().toLowerCase();
    if (!name) return;
    line(name, "terminal__line--cmd");
    history.push(name);
    historyIndex = history.length;

    if (name === "clear") {
      log.replaceChildren();
    } else if (Object.prototype.hasOwnProperty.call(commands, name)) {
      commands[name]();
    } else {
      line(`comando não encontrado: ${name}. Digite help para ver as opções.`, "terminal__line--muted");
    }
    log.scrollTop = log.scrollHeight;
  }

  termForm.addEventListener("submit", (event) => {
    event.preventDefault();
    run(input.value);
    input.value = "";
  });

  // Histórico com setas, como num terminal de verdade
  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && history.length) {
      event.preventDefault();
      historyIndex = Math.max(0, historyIndex - 1);
      input.value = history[historyIndex];
    } else if (event.key === "ArrowDown" && history.length) {
      event.preventDefault();
      historyIndex = Math.min(history.length, historyIndex + 1);
      input.value = history[historyIndex] || "";
    }
  });

  // Atalhos clicáveis: quem não quer digitar (ou está no celular) também usa
  hints.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-cmd]");
    if (!chip) return;
    run(chip.dataset.cmd);
    input.focus({ preventScroll: true });
  });

  // Estado inicial: já mostra quem sou, sem roubar o foco da página
  run("sobre");
  line("digite help para ver os comandos.", "terminal__line--muted");
})();
