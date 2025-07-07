export default function Eventos() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">Eventos e Promoções</h1>
      <p className="mb-6 text-gray-700 text-lg">
        Fique ligado nos próximos eventos e promoções exclusivas que preparamos para você!
      </p>

      <section className="space-y-6">
        <article className="bg-purple-50 rounded-lg p-5 shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Feira Tecnológica 2025</h2>
          <p className="text-gray-800">
            Data: 15 a 18 de Agosto de 2025  
            Local: Centro de Convenções  
            Venha conhecer as últimas novidades do mercado em primeira mão.
          </p>
        </article>

        <article className="bg-purple-50 rounded-lg p-5 shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Promoção Black Friday</h2>
          <p className="text-gray-800">
            Data: 28 de Novembro de 2025  
            Descontos imperdíveis em toda a linha de produtos. Aproveite!
          </p>
        </article>

        <article className="bg-purple-50 rounded-lg p-5 shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Workshop Online de Inovação</h2>
          <p className="text-gray-800">
            Data: 10 de Setembro de 2025  
            Inscreva-se para aprimorar seus conhecimentos com especialistas renomados.
          </p>
        </article>
      </section>
    </main>
  );
}
