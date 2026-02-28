// ===== DADOS CENTRALIZADOS DO SITE =====
// Single source of truth para evitar duplicação entre PC, Mobile e SEO

export const SITE_URL = "https://nutriludiana.com.br";

export const WHATSAPP_LINK =
  "https://wa.me/5549998235398?text=Olá%20Ludiana,%20vim%20pelo%20site!%20Gostaria%20de%20agendar%20uma%20consulta%20nutricional.";

export const WHATSAPP_NUMBER = "(49) 99823-5398";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/nutriludiana",
  facebook: "https://www.facebook.com/share/1GRdgdEPzt/",
  whatsapp: "https://wa.me/5549998235398",
};

export const FAQ_DATA = [
  {
    question: "Quanto custa uma consulta com nutricionista em Chapecó?",
    answer:
      "O valor da consulta nutricional varia conforme o tipo de atendimento e o plano de acompanhamento escolhido. Entre em contato pelo WhatsApp para conhecer os valores atualizados e as condições especiais para pacotes de acompanhamento contínuo. Investir em nutrição é investir na sua saúde a longo prazo.",
  },
  {
    question: "Como funciona a primeira consulta com a nutricionista Ludiana Campos?",
    answer:
      "Na primeira consulta, realizamos uma avaliação nutricional completa que inclui análise de composição corporal, histórico alimentar, exames laboratoriais e avaliação de hábitos de vida. A partir dessas informações, é elaborado um plano alimentar personalizado, adaptado às suas necessidades, preferências e rotina.",
  },
  {
    question: "Nutricionista pode ajudar no controle do diabetes tipo 2?",
    answer:
      "Sim! O acompanhamento nutricional é fundamental no tratamento do diabetes tipo 2. Através de um plano alimentar adequado, é possível controlar os níveis de glicemia, reduzir a hemoglobina glicada e, em muitos casos, diminuir a necessidade de medicamentos. A nutricionista Ludiana Campos é especialista no manejo nutricional do diabetes em Chapecó.",
  },
  {
    question: "Qual a diferença entre nutricionista e nutrólogo em Chapecó?",
    answer:
      "O nutricionista é o profissional graduado em Nutrição, habilitado a prescrever planos alimentares, realizar avaliação nutricional e acompanhar o paciente. O nutrólogo é um médico com especialização em nutrologia, podendo prescrever medicamentos. Ambos podem trabalhar de forma complementar para o melhor resultado do paciente.",
  },
  {
    question: "Com que frequência devo consultar uma nutricionista?",
    answer:
      "A frequência das consultas depende dos seus objetivos e condição de saúde. Geralmente, o retorno acontece entre 15 e 30 dias no início do tratamento, passando a intervalos maiores conforme a evolução. No acompanhamento para emagrecimento ou diabetes, consultas mensais são recomendadas para ajustes no plano alimentar.",
  },
  {
    question: "Preciso levar exames na consulta com nutricionista?",
    answer:
      "Recomendamos levar exames laboratoriais recentes (hemograma, glicemia, colesterol, triglicerídeos, entre outros). Caso não tenha exames atualizados, a nutricionista Ludiana pode solicitar os exames necessários para uma avaliação completa. Exames atualizados ajudam a personalizar melhor o seu plano alimentar.",
  },
  {
    question: "A nutricionista Ludiana Campos atende por convênio em Chapecó?",
    answer:
      "Atualmente, os atendimentos são realizados de forma particular, com valores acessíveis e opções de pacotes de acompanhamento. Entre em contato pelo WhatsApp para saber mais sobre formas de pagamento e condições especiais para acompanhamento contínuo.",
  },
  {
    question: "Nutricionista ajuda a emagrecer de forma saudável?",
    answer:
      "Com certeza! O emagrecimento saudável é uma das especialidades da nutricionista Ludiana Campos em Chapecó. O acompanhamento profissional garante que a perda de peso ocorra de forma segura, sem dietas restritivas, preservando a massa muscular e promovendo mudanças alimentares sustentáveis a longo prazo.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Simone Pinheiro Soares",
    date: "2025",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjX4eB7AuqDIg4KaU4hkSET8RjUO1Y3NXYfw_eJRAGZUVUEzTq0=s64-c-rp-mo-br100",
    text: "Maravilhosa, excelente profissional, acolhedora, ética, com uma bagagem teórica e prática impecável, que faz toda a diferença seus manejos clínicos...",
  },
  {
    name: "Camila de Assis Galan",
    date: "2024",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLUtE1VNnaRT8oMf_h-yq_-8VvZ4KQoTc6h97SSj5dKKhjqKw=s64-c-rp-mo-br100",
    text: "Nutri excelente! Super indico! 🥰🫶🏼",
  },
  {
    name: "Jucemara Silva",
    date: "2023",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocIB_Pqe2cMEbvxjMvmK1OmV-nBfvzXcSTkiPSPrmXzfnw=s64-c-rp-mo-br100",
    text: "Excelente profissional! Muito atenciosa e dedicada. Recomendo a todos que buscam uma alimentação mais saudável.",
  },
];

export const BENEFICIOS_DATA = [
  { title: "Emagrecimento sustentável", desc: "Perda de peso real e duradoura, sem efeito sanfona, com planos adaptados ao seu estilo de vida em Chapecó." },
  { title: "Mais energia e disposição", desc: "Alimentação adequada melhora seu desempenho no trabalho, nos exercícios e nas atividades do dia a dia." },
  { title: "Controle de doenças crônicas", desc: "Manejo nutricional de diabetes, hipertensão, colesterol alto e outras condições com acompanhamento profissional." },
  { title: "Melhora da autoestima", desc: "Ao alcançar seus objetivos nutricionais, você ganha mais confiança e satisfação com seu corpo e saúde." },
  { title: "Prevenção de doenças", desc: "Uma alimentação equilibrada é a melhor ferramenta de prevenção contra diabetes, doenças cardíacas e câncer." },
  { title: "Educação nutricional", desc: "Aprenda a fazer escolhas alimentares inteligentes que você levará para toda a vida, conquistando autonomia alimentar." },
];

// Versões curtas para mobile
export const BENEFICIOS_DATA_MOBILE = [
  { title: "Emagrecimento sustentável", desc: "Perda de peso real e duradoura, sem efeito sanfona." },
  { title: "Mais energia e disposição", desc: "Alimentação adequada melhora seu desempenho diário." },
  { title: "Controle de doenças crônicas", desc: "Manejo nutricional de diabetes, hipertensão e colesterol." },
  { title: "Melhora da autoestima", desc: "Confiança e satisfação com seu corpo e saúde." },
  { title: "Prevenção de doenças", desc: "Alimentação equilibrada previne diabetes e doenças cardíacas." },
  { title: "Educação nutricional", desc: "Escolhas alimentares inteligentes para toda a vida." },
];
