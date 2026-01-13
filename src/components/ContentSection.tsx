import { Brain, Store, TrendingUp, Bot, Target, AlertTriangle } from "lucide-react";

const chapters = [
  {
    icon: Brain,
    number: "01",
    title: "Mentalidade Vencedora",
    description: "Quebre as crenças que te impedem de começar e desenvolva o mindset de quem fatura.",
  },
  {
    icon: Store,
    number: "02",
    title: "Loja Simples que Vende",
    description: "Aprenda a criar uma loja profissional sem complicação, mesmo sem saber nada de tecnologia.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Método Espiral de Vendas",
    description: "A estratégia secreta para escalar suas vendas de forma consistente e previsível.",
  },
  {
    icon: Bot,
    number: "04",
    title: "IA Sem Aparecer",
    description: "Use inteligência artificial para criar conteúdo e vender sem precisar gravar um único vídeo.",
  },
  {
    icon: Target,
    number: "05",
    title: "Primeiros Resultados",
    description: "O passo a passo exato para fazer suas primeiras vendas nos primeiros dias.",
  },
  {
    icon: AlertTriangle,
    number: "06",
    title: "Erros Fatais",
    description: "Os 7 erros que fazem iniciantes desistirem — e como evitar cada um deles.",
  },
];

const ContentSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            O que você vai <span className="text-gradient-primary">aprender</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo direto ao ponto, sem enrolação. Cada capítulo foi pensado para te levar do zero ao resultado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="card-premium group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-muted/50 font-display">
                {chapter.number}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <chapter.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{chapter.title}</h3>
                <p className="text-muted-foreground">{chapter.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#oferta" className="btn-cta">
            Quero Aprender Tudo Isso
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
