import { Check, X } from "lucide-react";

const forYou = [
  "Está cansado de trabalhar muito e ganhar pouco",
  "Quer uma renda extra sem sair de casa",
  "Nunca vendeu online mas quer aprender",
  "Não quer aparecer ou gravar vídeos",
  "Busca um método simples e direto",
  "Está disposto a dedicar algumas horas por dia",
];

const notForYou = [
  "Busca fórmula mágica para ficar rico do dia pra noite",
  "Não está disposto a aprender coisas novas",
  "Quer resultados sem fazer nada",
  "Não tem paciência para seguir um processo",
];

const AudienceSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            O <span className="text-gradient-gold">Faturando Sem Estoque</span>
            <br />
            é pra você?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For you */}
          <div className="card-premium border-primary/30 hover:shadow-glow-primary transition-all duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">É pra você se...</h3>
            </div>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div className="card-premium border-muted opacity-60">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <X className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-muted-foreground">Não é pra você se...</h3>
            </div>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4" />
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

export default AudienceSection;
