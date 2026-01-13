import { Video, Users, Calendar, Trophy } from "lucide-react";

const workshopFeatures = [
  {
    icon: Video,
    title: "Criação de Loja ao Vivo",
    description: "Veja a criação completa de uma loja do zero, passo a passo.",
  },
  {
    icon: Users,
    title: "Acompanhamento em Grupo",
    description: "Tire suas dúvidas em tempo real e aprenda com outros alunos.",
  },
  {
    icon: Calendar,
    title: "Plano de Ação Semanal",
    description: "Receba um cronograma claro do que fazer a cada dia.",
  },
  {
    icon: Trophy,
    title: "Do Zero ao Faturamento",
    description: "Objetivo: sua primeira venda em até 7 dias.",
  },
];

const WorkshopSection = () => {
  return (
    <section className="py-20 md:py-32 relative bg-muted/30">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-primary/5 to-muted/30" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-secondary/30 bg-secondary/10 text-secondary">
            <span className="text-sm font-semibold">🎁 BÔNUS EXCLUSIVO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Workshop <span className="text-gradient-gold">Mão na Massa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Além do eBook, você recebe acesso ao workshop exclusivo onde vamos criar tudo juntos na prática.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {workshopFeatures.map((feature, index) => (
            <div
              key={index}
              className="card-premium text-center group hover:border-secondary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-secondary" />
              </div>
              <h4 className="font-display text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="card-premium max-w-3xl mx-auto text-center border-secondary/30 shadow-glow-gold">
          <p className="text-xl md:text-2xl font-medium mb-4">
            O workshop sozinho vale mais do que muitos cursos completos.
          </p>
          <p className="text-muted-foreground">
            Mas você vai receber <span className="text-secondary font-semibold">de graça</span> ao adquirir o Faturando Sem Estoque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
