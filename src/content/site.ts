/**
 * Fonte única de conteúdo do site.
 * Tudo que aparece na landing sai daqui — quando o dashboard existir,
 * basta trocar estas constantes por uma leitura de banco (mesmo formato).
 */

export const company = {
  name: "LS Soluções",
  tagline: "A solução para sua obra",
  city: "Juazeiro do Norte",
  state: "CE",
  region: "Cariri e região",
  email: "contato@lssolucoes.com.br",
  instagram: "https://instagram.com/lssolucoes",
  /** Número principal usado nos botões de WhatsApp */
  whatsapp: {
    label: "(88) 99278-6498",
    e164: "5588992786498",
  },
  /** Segundo número que aparece nas artes — usado no rodapé */
  whatsappSecondary: {
    label: "(88) 99851-6569",
    e164: "5588998516569",
  },
} as const;

export function whatsappLink(message: string, phone: string = company.whatsapp.e164) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Olá! Vim pelo site da LS Soluções e quero falar sobre um projeto.";

export type Service = {
  slug: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "construcao",
    title: "Construção civil",
    description:
      "Da fundação à entrega das chaves, com equipe própria e cronograma que é cumprido.",
    items: ["Residencial", "Comercial", "Galpões e estruturas"],
  },
  {
    slug: "reformas",
    title: "Reformas e ampliações",
    description:
      "Reforma feita com projeto antes de quebrar parede — sem surpresa no meio do caminho.",
    items: ["Retrofit", "Ampliação de área", "Fachadas"],
  },
  {
    slug: "projetos",
    title: "Projetos e engenharia",
    description:
      "Arquitetônico, estrutural e complementares compatibilizados no mesmo desenho.",
    items: ["Arquitetônico", "Estrutural", "Elétrico e hidrossanitário"],
  },
  {
    slug: "gerenciamento",
    title: "Gerenciamento de obra",
    description:
      "Você acompanha custo, prazo e qualidade por relatório — nós resolvemos o resto.",
    items: ["Orçamento e planejamento", "Medições", "Relatório semanal"],
  },
  {
    slug: "regularizacao",
    title: "Regularização e laudos",
    description:
      "Documentação em dia para financiar, vender ou liberar o alvará da sua obra.",
    items: ["Aprovação em prefeitura", "Habite-se", "Laudos técnicos"],
  },
  {
    slug: "manutencao",
    title: "Manutenção predial",
    description:
      "Contrato de manutenção para condomínios e empresas que não podem parar.",
    items: ["Preventiva", "Corretiva", "Impermeabilização"],
  },
];

export const reasons = [
  {
    number: "01",
    title: "Economia na sua obra",
    text: "Orçamento aberto, compra direta com fornecedor e planejamento que evita retrabalho. O que sobra fica com você.",
  },
  {
    number: "02",
    title: "Sem dor de cabeça",
    text: "Um único responsável técnico do começo ao fim. Você não precisa correr atrás de pedreiro, material nem prazo.",
  },
  {
    number: "03",
    title: "Otimizar seu tempo",
    text: "Cronograma detalhado por etapa e acompanhamento à distância. Você vê a obra andar sem morar nela.",
  },
  {
    number: "04",
    title: "Mais segurança",
    text: "Contrato claro, engenheiro responsável, ART emitida e equipe com EPI. Obra segura para todo mundo.",
  },
];

export const steps = [
  {
    title: "Conversa inicial",
    text: "Entendemos o que você quer construir, o prazo e quanto pretende investir. Sem compromisso.",
  },
  {
    title: "Visita e estudo",
    text: "Visitamos o terreno ou o imóvel, levantamos as condições e apresentamos os caminhos possíveis.",
  },
  {
    title: "Proposta e projeto",
    text: "Você recebe orçamento detalhado por etapa e o projeto que vai guiar a execução.",
  },
  {
    title: "Execução acompanhada",
    text: "Obra tocada por equipe própria, com medição e relatório de avanço a cada semana.",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "residencia-alto-padrao",
    title: "Residência unifamiliar",
    category: "Construção",
    location: "Juazeiro do Norte, CE",
    year: "2025",
    summary: "240 m² executados em 11 meses, do projeto estrutural ao acabamento.",
  },
  {
    slug: "galpao-logistico",
    title: "Galpão logístico",
    category: "Estrutura",
    location: "Crato, CE",
    year: "2024",
    summary: "Estrutura metálica de 900 m² com piso industrial e área administrativa.",
  },
  {
    slug: "reforma-comercial",
    title: "Reforma de loja",
    category: "Reforma",
    location: "Barbalha, CE",
    year: "2024",
    summary: "Retrofit completo de fachada e interior sem fechar as portas do cliente.",
  },
];

export const faq = [
  {
    q: "Vocês atendem fora de Juazeiro do Norte?",
    a: "Sim. Atendemos todo o Cariri e cidades vizinhas. Para obras mais distantes avaliamos o deslocamento junto com o orçamento.",
  },
  {
    q: "Quanto custa o orçamento?",
    a: "A primeira conversa e a visita técnica são gratuitas. O orçamento detalhado por etapa também é enviado sem custo.",
  },
  {
    q: "Dá para contratar só o projeto?",
    a: "Dá. Muita gente contrata só o projeto ou só o gerenciamento e executa com a própria equipe. A escolha é sua.",
  },
  {
    q: "Como acompanho a obra se moro em outra cidade?",
    a: "Você recebe relatório semanal com fotos, medição do que foi executado e o previsto para a semana seguinte.",
  },
  {
    q: "Existe garantia do serviço?",
    a: "Sim. Todo serviço é entregue com contrato, responsável técnico e as garantias previstas em norma para cada etapa.",
  },
];

export const stats = [
  { value: "12+", label: "anos de obra no Cariri" },
  { value: "180", label: "projetos entregues" },
  { value: "100%", label: "obras com engenheiro responsável" },
];

export const navigation = [
  { href: "#servicos", label: "Serviços" },
  { href: "#motivos", label: "Por que a LS" },
  { href: "#processo", label: "Como funciona" },
  { href: "#obras", label: "Obras" },
  { href: "#contato", label: "Contato" },
];
