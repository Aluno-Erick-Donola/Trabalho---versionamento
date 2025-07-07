export default function SobreNos() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-red-700">Sobre Nós</h1>
      <p className="mb-6 text-gray-700 text-lg">
        Fundada em 2010, nossa empresa nasceu da paixão por tecnologia e inovação, buscando sempre oferecer as melhores soluções para nossos clientes.
      </p>
      <p className="mb-6 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a risus at lacus malesuada convallis.  
        Praesent eget nisl vitae metus convallis faucibus.  
      </p>

      <section className="bg-red-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Nossa Missão</h2>
        <p>
          Fornecer produtos e serviços de alta qualidade que promovam o crescimento sustentável dos nossos clientes e parceiros.
        </p>
      </section>

      <section className="mt-6 bg-red-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Nossos Valores</h2>
        <ul className="list-disc list-inside">
          <li>Compromisso com a qualidade</li>
          <li>Inovação constante</li>
          <li>Transparência e ética</li>
          <li>Foco no cliente</li>
          <li>Trabalho em equipe</li>
        </ul>
      </section>
    </main>
  );
}
