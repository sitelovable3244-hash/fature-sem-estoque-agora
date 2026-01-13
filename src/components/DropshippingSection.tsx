import { Package, DollarSign, Globe, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Package,
    title: "Sem Estoque",
    description: "Você não precisa comprar produtos antes de vender. O fornecedor envia direto para o cliente.",
  },
  {
    icon: DollarSign,
    title: "Baixo Investimento",
    description: "Comece com pouquíssimo capital. Ideal para quem não tem dinheiro sobrando.",
  },
  {
    icon: Globe,
    title: "De Qualquer Lugar",
    description: "Trabalhe de casa, do celular, na hora que quiser. Você é seu próprio chefe.",
  },
  {
    icon: Rocket,
    title: "Escalável",
    description: "Quanto mais vende, mais ganha. Sem limite de crescimento.",
  },
];

const DropshippingSection = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-32 relative bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            O que é <span className="text-gradient-gold">Dropshipping?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma forma inteligente de vender online sem precisar ter estoque, investir muito ou se arriscar.
          </p>
        </div>

        {/* How it works */}
        <div className="card-premium max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold mb-2">Cliente compra de você</h4>
              <p className="text-sm text-muted-foreground">Você divulga o produto e recebe o pedido</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h4 className="font-semibold mb-2">Você repassa ao fornecedor</h4>
              <p className="text-sm text-muted-foreground">Paga o preço de custo e informa o endereço</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-secondary/50 to-transparent" />
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h4 className="font-semibold mb-2">Fornecedor entrega</h4>
              <p className="text-sm text-muted-foreground">O produto vai direto para o cliente final</p>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-premium text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-lg font-bold mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DropshippingSection;
