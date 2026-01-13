const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="text-center">
          <h3 className="font-display text-xl font-bold mb-4">Faturando Sem Estoque</h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            Produto digital com conteúdo educativo sobre vendas online e dropshipping.
            Ideal para plataformas como Kiwify e Hotmart.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
            <span>📖 Conteúdo Digital</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>📚 Material Educativo</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>🔒 Compra Segura</span>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
            <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Contato</a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Faturando Sem Estoque. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
