import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-32 relative bg-muted/30">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-accent/5 to-muted/30" />
      
      <div className="section-container relative z-10 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          O ciclo só quebra quando
          <br />
          <span className="text-gradient-gold">você decide agir</span>
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Daqui a um ano, você vai olhar pra trás e desejar ter começado hoje.
          <br />
          A diferença entre quem fatura e quem não fatura é <strong className="text-foreground">uma decisão</strong>.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a href="#oferta" className="btn-cta text-xl px-12 py-5">
            Quero Quebrar o Ciclo Agora
            <ArrowRight className="w-6 h-6" />
          </a>
          
          <p className="text-sm text-muted-foreground">
            Oferta por tempo limitado • Garantia de 7 dias
          </p>
        </div>

        {/* Testimonial hint */}
        <div className="mt-16 max-w-xl mx-auto">
          <div className="card-premium">
            <p className="text-lg italic text-muted-foreground mb-4">
              "Eu achava que vender online era coisa de outro mundo. Em 2 semanas já tinha feito minhas primeiras vendas. O método é simples demais."
            </p>
            <p className="font-semibold">— Maria S., aluna do Faturando Sem Estoque</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
