export default function Clientes() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">Nossos Clientes</h1>
      <p className="mb-6 text-gray-700 text-lg">
        Orgulhamo-nos de trabalhar com empresas e pessoas que confiam na nossa qualidade e compromisso.
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-800">
        <li><strong>Empresa Alpha</strong> – Parceira estratégica desde 2018.</li>
        <li><strong>Beta Comércio Ltda.</strong> – Fornecedora exclusiva desde 2020.</li>
        <li><strong>Gamma Serviços</strong> – Cliente fiel e entusiasta dos nossos produtos.</li>
        <li><strong>Delta Corp.</strong> – Referência em inovação e tecnologia.</li>
      </ul>

      <section className="mt-8 bg-indigo-50 p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-3">Depoimentos</h2>
        <blockquote className="italic text-gray-700">
          “Excelente atendimento e produtos de alta qualidade. Recomendo muito!” – <strong>João Silva</strong>
        </blockquote>
        <blockquote className="italic text-gray-700 mt-4">
          “Profissionalismo e comprometimento que fazem a diferença.” – <strong>Maria Oliveira</strong>
        </blockquote>
      </section>
    </main>
  );
}
