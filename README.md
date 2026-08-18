# LS Soluções — landing page

Landing institucional da LS Soluções (construtora / engenharia no Cariri), em
Next.js 15 (App Router) + React 19 + Tailwind CSS v4 e TypeScript. A estrutura já
prevê a evolução para um dashboard: todo conteúdo sai de um módulo único e os
leads passam por uma API com contrato estável.

## Rodar

```bash
npm install
npm run dev
```

Abre em http://localhost:3000.

Copie `.env.example` para `.env.local` e defina `LS_ADMIN_TOKEN` antes de usar as
rotas de leitura de leads.

## Onde mexer

| Preciso de... | Arquivo |
| --- | --- |
| Trocar telefone, e-mail, cidade, redes | `src/content/site.ts` (`company`) |
| Editar serviços, motivos, etapas, obras, FAQ | `src/content/site.ts` |
| Ajustar cores/tipografia da marca | `src/app/globals.css` (`@theme`) |
| Trocar a logo provisória | `src/components/logo.tsx` |
| Ordem das seções | `src/app/page.tsx` |

### Fotos

As áreas de imagem já estão posicionadas e usam arquivos de `/public/obras/`.
Basta salvar com estes nomes que a foto entra no lugar do placeholder azul:

- `public/obras/hero-1.jpg`, `public/obras/hero-2.jpg` — colagem do topo
- `public/obras/<slug-da-obra>.jpg` — cards da seção "Obras"
  (`residencia-alto-padrao.jpg`, `galpao-logistico.jpg`, `reforma-comercial.jpg`)

### Logo

`src/components/logo.tsx` traz um monograma provisório em SVG. Para usar o
arquivo oficial, salve em `public/logo.svg` e troque o `<svg>` do `LogoMark` por
`<img src="/logo.svg" alt="LS Soluções" />`.

## API

| Método | Rota | Auth | Uso |
| --- | --- | --- | --- |
| POST | `/api/contact` | pública | Formulário da landing. Valida com zod, tem honeypot e rate limit por IP. |
| GET | `/api/leads?status=&limit=` | `x-api-key` | Lista leads para o dashboard. |
| PATCH | `/api/leads/:id` | `x-api-key` | Move o lead no funil (`status`). |
| GET | `/api/services` | pública | Serviços em JSON. |
| GET | `/api/projects` | pública | Obras em JSON. |
| GET | `/api/health` | pública | Healthcheck. |

Toda resposta segue o mesmo formato:

```json
{ "ok": true, "data": { } }
{ "ok": false, "message": "..." }
```

Status possíveis do lead: `novo`, `em_contato`, `orcamento`, `ganho`, `perdido`.

Teste rápido:

```bash
curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d "{\"name\":\"Teste\",\"phone\":\"88999999999\",\"city\":\"Juazeiro\",\"service\":\"reformas\"}"
```

### Persistência

Hoje os leads vão para `data/leads.json` (com fallback em memória se o disco for
somente leitura, como em serverless). Para migrar, basta reimplementar
`LeadStore` em `src/lib/leads.ts` com Prisma/Supabase — as rotas não mudam.

Definindo `LS_LEADS_WEBHOOK_URL`, cada lead também é encaminhado por POST para
essa URL (n8n, CRM, Slack), sem travar a resposta ao visitante.

## Pendências antes de publicar

- Números de WhatsApp: as artes trazem dois, confirmar qual é o principal.
- Estatísticas do topo (anos, projetos entregues) são provisórias.
- Obras da seção "Obras" são exemplos — substituir por obras reais e fotos.
- E-mail, Instagram e cidade de atendimento em `company` precisam ser confirmados.
