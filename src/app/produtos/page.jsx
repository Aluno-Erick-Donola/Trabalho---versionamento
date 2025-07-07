export default function Produtos() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-green-700">Nossos Produtos</h1>
      <p className="mb-6 text-gray-700 text-lg">
        Oferecemos uma linha completa de produtos cuidadosamente selecionados para atender às suas necessidades com qualidade e inovação.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Produto A</h2>
          <p className="text-gray-600 mb-4">Produto de alta performance, ideal para quem busca eficiência e durabilidade.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Saiba mais
          </button>
        </article>

        <article className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Produto B</h2>
          <p className="text-gray-600 mb-4">Tecnologia de ponta para soluções modernas e práticas do dia a dia.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Saiba mais
          </button>
        </article>

        <article className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Produto C</h2>
          <p className="text-gray-600 mb-4">Design inovador e funcionalidade que facilitam seu trabalho e lazer.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Saiba mais
          </button>
        </article>
      </section>
    </main>
  );
}
