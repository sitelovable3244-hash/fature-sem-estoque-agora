import { BookOpen, Sparkles, Target } from "lucide-react";

const ProductSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Product visualization */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <div className="relative card-premium text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-cta flex items-center justify-center shadow-glow-accent">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-2">Faturando Sem Estoque</h3>
              <p className="text-secondary font-semibold mb-4">eBook + Workshop Exclusivo</p>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>📖 eBook Completo</span>
                <span>🎬 Workshop ao Vivo</span>
                <span>🎁 Bônus Especiais</span>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Apresentamos a Solução
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              O guia definitivo para
              <br />
              <span className="text-gradient-primary">começar do zero</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <strong className="text-foreground">Faturando Sem Estoque</strong> é um método prático e direto criado especialmente para quem nunca vendeu online. Sem teoria complicada, sem promessas absurdas — apenas o passo a passo que realmente funciona.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Método validado</h4>
                  <p className="text-sm text-muted-foreground">Testado e aprovado por centenas de alunos iniciantes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Aplicação imediata</h4>
                  <p className="text-sm text-muted-foreground">Você pode começar a aplicar ainda hoje.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Linguagem simples</h4>
                  <p className="text-sm text-muted-foreground">Explicado de forma que qualquer pessoa entende.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
