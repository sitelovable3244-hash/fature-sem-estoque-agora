import { ArrowRight, BookOpen, Video, Gift, Shield, Clock } from "lucide-react";

const OfferSection = () => {
  return (
    <section id="oferta" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Chegou a hora de <span className="text-gradient-gold">decidir</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Você pode continuar fazendo o que sempre fez e ter os mesmos resultados.
            <br />
            Ou pode dar o primeiro passo agora.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="card-premium border-primary/50 shadow-glow-primary relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold rounded-bl-lg">
              OFERTA ESPECIAL
            </div>

            <div className="text-center mb-8 pt-4">
              <h3 className="font-display text-2xl font-bold mb-2">Faturando Sem Estoque</h3>
              <p className="text-muted-foreground">Acesso completo ao método + bônus</p>
            </div>

            {/* What's included */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">eBook Completo</p>
                  <p className="text-sm text-muted-foreground">Guia passo a passo do zero ao resultado</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold">Workshop Mão na Massa</p>
                  <p className="text-sm text-muted-foreground">Criação de loja ao vivo + acompanhamento</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Gift className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Bônus Exclusivos</p>
                  <p className="text-sm text-muted-foreground">Templates, prompts de IA e mais</p>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-lg text-muted-foreground line-through">R$ 197,00</span>
                <span className="px-2 py-0.5 bg-primary/20 text-primary text-sm font-semibold rounded">-75%</span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-lg">R$</span>
                <span className="font-display text-6xl font-bold text-gradient-gold">47</span>
                <span className="text-lg">,00</span>
              </div>
              <p className="text-muted-foreground mt-2">ou 12x de R$ 4,70</p>
            </div>

            {/* CTA */}
            <a href="#" className="btn-cta w-full text-center mb-6">
              Quero Começar Agora
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Guarantees */}
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Compra segura</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>

          {/* Guarantee section */}
          <div className="card-premium mt-6 text-center border-primary/30">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-display text-xl font-bold mb-2">Garantia de 7 Dias</h4>
            <p className="text-muted-foreground">
              Se em 7 dias você não gostar do conteúdo ou achar que não é pra você, devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
