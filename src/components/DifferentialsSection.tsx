import { Check, X } from "lucide-react";

const differentials = [
  "Linguagem simples e direta",
  "Método 100% prático",
  "Sem promessas milagrosas",
  "Não precisa aparecer",
  "Não precisa de experiência",
  "Suporte e comunidade",
];

const others = [
  "Teoria demais, prática de menos",
  "Promessas de ficar rico rápido",
  "Precisa gravar vídeos",
  "Conteúdo desatualizado",
  "Sem suporte ao aluno",
  "Linguagem técnica complexa",
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 md:py-32 relative bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Por que o <span className="text-gradient-gold">Faturando Sem Estoque</span>
            <br />
            é diferente?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Our method */}
          <div className="card-premium border-primary/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold">Nosso Método</h3>
            </div>
            <ul className="space-y-4">
              {differentials.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Others */}
          <div className="card-premium border-destructive/30 opacity-70">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-bold text-muted-foreground">Outros Cursos</h3>
            </div>
            <ul className="space-y-4">
              {others.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 text-destructive/70" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
