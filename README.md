# Portfólio — Lucas Gabriel Wendler de Souza

Portfólio pessoal desenvolvido com React, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animações
- **Lucide React** — ícones
- **Vite** — bundler

## 🛠️ Como rodar localmente

```bash
npm install
npm run dev
```

## 📦 Build para produção

```bash
npm run build
```

## 🌐 Deploy no Vercel

1. Faça push do projeto para o GitHub
2. Importe o repositório no [vercel.com](https://vercel.com)
3. O Vercel detecta automaticamente o Vite — clique em **Deploy**

O arquivo `vercel.json` já está configurado para o roteamento correto de SPA.

## 📁 Estrutura

```
src/
├── components/
│   ├── Header.tsx          # Navegação com menu mobile
│   ├── CustomCursor.tsx    # Cursor customizado (desktop only)
│   ├── SobreMim.tsx        # Seção sobre mim
│   ├── SkillsSection.tsx   # Skills com filtros
│   ├── ExperienceSection.tsx # Timeline de projetos
│   └── ContactSection.tsx  # Seção de contato
├── assets/                 # Imagens dos projetos
├── App.tsx
├── main.tsx
└── index.css
```
