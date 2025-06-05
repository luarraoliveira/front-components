# 🧑‍🎨 Style Guide - Projeto de Estudo

Este repositório contém um style guide básico para projetos de front-end, ideal para iniciantes.

## 🎯 Objetivo

Fornecer uma base visual simples e reutilizável com:

- Paleta de cores
- Tipografia
- Botões
- Campos de formulário

## 🧰 Tecnologias utilizadas

- Markdown (documentação)
- Google Fonts (Roboto)

## 📁 Estrutura de Pastas

```bash
my-project/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       └── .keep
├── components/
│   └── header.html
└── README.md
```

---

## 🌐 HTML

- Use tags **semânticas** sempre que possível (`<header>`, `<main>`, `<section>`, `<footer>`, etc).
- Indente com 2 ou 4 espaços (consistência é mais importante do que a escolha).
- Use **letras minúsculas** para tags, atributos e nomes de arquivos.
- Feche todas as tags, inclusive `<img />` e `<input />`.

```html
<section class="about">
  <h2>Sobre Mim</h2>
  <p>
    Sou desenvolvedor front-end focado em criar experiências web acessíveis.
  </p>
</section>
```

---

## 🎨 CSS / SCSS

- Use **nomes descritivos** e em **kebab-case** para classes (ex: `.card-title`, `.form-container`).
- Evite IDs para estilização, use classes.
- Utilize variáveis (`:root` ou SCSS) para cores, fontes e espaçamentos.
- Agrupe estilos relacionados por componente.
- Prefira BEM ou uma estrutura modular simples.

```css
:root {
  --primary-color: #0055ff;
  --font-base: "Inter", sans-serif;
}

.card {
  padding: 1rem;
  background-color: var(--primary-color);
  color: white;
}

.card__title {
  font-size: 1.25rem;
  font-weight: bold;
}
```

---

## 📜 JavaScript

- Use `const` e `let`, evite `var`.
- Nomeie funções de forma clara e em camelCase.
- Comente trechos complexos.
- Prefira código funcional e modularizado.

```javascript
const toggleMenu = () => {
  const menu = document.querySelector(".mobile-menu");
  menu.classList.toggle("active");
};

document.querySelector(".menu-button").addEventListener("click", toggleMenu);
```

---

## 🧪 Boas práticas

- Escreva código limpo e legível (mesmo para você no futuro).
- Comente trechos importantes, mas evite excesso.
- Teste o site em mais de um navegador.
- Faça _commits_ com mensagens descritivas e consistentes.

---

## 📘 Convenções de commit (opcional)

Se quiser usar [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: adiciona componente de formulário de contato
fix: corrige bug de alinhamento no header
style: melhora espaçamento entre seções
```

---

## 💡 Dica final

> Código bom não é aquele que funciona, é aquele que funciona **e é fácil de manter**.

## 📷 Exemplo visual

![Exemplo de style guide](./A_style_guide_image_displays_design_elements_on_a_.png)

## 🎨 Cores utilizadas

- Branco: `#FFFFFF`
- Preto: `#000000`
- Azul: `#0055FF`

## 🔤 Tipografia

- Fonte: [Roboto](https://fonts.google.com/specimen/Roboto)

## 🧪 Sugestão

Sinta-se à vontade para adaptar ou expandir conforme for evoluindo nos estudos!
