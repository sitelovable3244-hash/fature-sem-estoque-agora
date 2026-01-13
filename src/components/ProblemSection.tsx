import { Clock, TrendingDown, AlertCircle, Frown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Trabalha o dia inteiro",
    description: "Acorda cedo, chega tarde, e no final do mês sobra quase nada na conta.",
  },
  {
    icon: TrendingDown,
    title: "Tentou de tudo",
    description: "Já pesquisou sobre renda extra, mas tudo parece complicado demais ou promessa vazia.",
  },
  {
    icon: AlertCircle,
    title: "Medo de dar errado",
    description: "Tem receio de investir tempo e dinheiro em algo que não vai funcionar — de novo.",
  },
  {
    icon: Frown,
    title: "Frustrado com resultados",
    description: "Sente que por mais que se esforce, nunca consegue sair do mesmo lugar.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Você se identifica com
            <br />
            <span className="text-accent">alguma dessas situações?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se você respondeu "sim" para qualquer uma delas, você está no lugar certo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="card-premium group hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="card-premium max-w-3xl mx-auto border-primary/30">
            <p className="text-xl md:text-2xl font-medium">
              O problema não é <span className="text-accent">você</span>.
              <br />
              O problema é que ninguém te mostrou o <span className="text-gradient-gold">caminho certo</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
