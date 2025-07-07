export default function Contato() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Contato</h1>
      <p className="mb-4 text-lg text-gray-700">
        Queremos ouvir você! Entre em contato com nossa equipe para tirar dúvidas, solicitar orçamentos ou enviar sugestões.
      </p>
      <section className="bg-blue-50 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Formas de contato</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Email: <a href="mailto:contato@empresa.com" className="text-blue-600 underline">contato@empresa.com</a></li>
          <li>Telefone: <a href="tel:+551112345678" className="text-blue-600 underline">(11) 1234-5678</a></li>
          <li>Endereço: Rua Exemplo, 123, Bairro Centro, Cataguases - MG</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Horário de atendimento</h2>
        <p className="text-gray-700">
          Segunda a Sexta, das 8h às 18h.  
          Aos sábados, das 9h às 13h.
        </p>
      </section>
    </main>
  );
}
