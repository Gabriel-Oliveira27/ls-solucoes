# AGENTS.md — contexto para continuar o projeto

Guia de bordo para qualquer agente (ou pessoa) que abrir este repositório em
outra máquina. Leia antes de mexer.

## O que é

Landing page da **LS Soluções**, construtora / engenharia civil no Cariri (CE).
Estado atual: **MVP visual aprovado como primeira impressão**, ainda em fase de
polimento. A próxima etapa prevista é um **dashboard administrativo** no mesmo
projeto — por isso o conteúdo é centralizado e os leads já passam por API.

## Stack

- Next.js 15.5 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (config por `@theme` dentro do CSS, **não existe** `tailwind.config.js`)
- zod para validação de payload
- Sem banco de dados ainda: leads em `data/leads.json`

```bash
npm install
cp .env.example .env.local   # defina LS_ADMIN_TOKEN
npm run dev                  # http://localhost:3000
npm run build                # precisa passar antes de qualquer PR
```

## Mapa do repositório

```
src/
  app/
    layout.tsx           fontes, metadata, viewport
    page.tsx             ordem das seções + JSON-LD
    globals.css          tokens da marca (@theme) e utilities customizadas
    icon.svg             favicon
    api/
      contact/           POST público (formulário)
      leads/             GET lista + PATCH status (header x-api-key)
      services/ projects/ health/
  components/            uma seção por arquivo
  content/site.ts        TODO o conteúdo do site
  lib/
    api.ts               helpers de resposta, auth por token, rate limit
    leads.ts             LeadStore (arquivo JSON + fallback memória)
    validation.ts        schemas zod e normalização de telefone
public/obras/            fotos das obras (ver README)
```

## Convenções que o projeto segue

- **Conteúdo nunca fica hardcoded em componente.** Textos, serviços, motivos,
  etapas, obras e FAQ vivem em `src/content/site.ts`.
- **Cores só por token** (`navy-*`, `brand-*`, `orange-*`, `ice-*`) definidos em
  `globals.css`. Nada de hex solto no JSX.
- Linguagem visual da marca: cantos retos (sem `rounded-*` genérico), blocos em
  seta (`chevron-right` / `chevron-left`), textura `blueprint`, laranja como
  cor de ação e navy como base.
- Texto em pt-BR, tom direto, sem jargão de marketing.
- Seções são Server Components; só viram `"use client"` quando têm estado
  (`site-header`, `faq`, `contact`, `whatsapp-float`).
- Respostas de API sempre `{ ok: true, data }` ou `{ ok: false, message }`.

## Decisões já tomadas

- Layout de uma página só, com âncoras (`#servicos`, `#motivos`, `#processo`,
  `#obras`, `#contato`).
- Logo atual é um **monograma provisório em SVG** (`src/components/logo.tsx`);
  o arquivo oficial da marca ainda não foi anexado ao repo.
- Fotos entram como `background-image` com fallback azul — ausência de arquivo
  não quebra o layout.
- Autenticação das rotas de leitura é um token simples via header; foi escolhida
  de propósito por ser temporária até o dashboard ter login.

## Pendências (em ordem de prioridade)

1. **Conteúdo real**: confirmar qual WhatsApp é o principal (as artes trazem
   `88 99278-6498` e `88 99851-6569`), e-mail, Instagram, cidade-sede.
2. **Números provisórios**: `stats` em `content/site.ts` (12+ anos, 180
   projetos) e as três obras da seção "Obras" são exemplos — trocar por dados
   reais antes de publicar.
3. **Fotos** das obras em `public/obras/`.
4. **Logo oficial** substituindo o monograma provisório.
5. **Dashboard**: rota `/admin` com login, consumindo `GET /api/leads` e
   `PATCH /api/leads/:id`. Ao migrar para banco, reimplementar apenas a
   interface `LeadStore` em `src/lib/leads.ts` — as rotas não mudam.
6. Notificação de lead novo (e-mail ou WhatsApp). Já existe o gancho
   `forwardLead` com `LS_LEADS_WEBHOOK_URL`.
7. Polimento visual pendente combinado com o cliente: animações de entrada,
   seção de depoimentos reais, página de obra individual.

## Armadilhas conhecidas

- Tailwind v4: utilities customizadas usam `@utility` em `globals.css`. Elas
  aceitam variantes (`lg:chevron-left`), mas **não** existem em `tailwind.config`.
- Ao passar classe de posição para um componente que já tem `relative` no
  className base, o `relative` vence. Por isso `PhotoTile` não declara posição.
- `data/leads.json` está no `.gitignore`: em produção serverless o disco é
  somente leitura e o store cai para memória — migrar para banco antes de
  depender disso.
