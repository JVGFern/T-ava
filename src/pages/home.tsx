import Header from '../components/home/header';
import Footer from '../components/home/footer';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleCreateTest = () => {
    navigate('/login');
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Notas</h2>
          <p>Aqui você pode visualizar suas notas e desempenho nas provas.</p>
          {/* Adicione conteúdo adicional relacionado às notas */}
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Avaliações</h2>
          <p>Confira as próximas avaliações agendadas e seus detalhes.</p>
          <button>awd</button>
          {/* Adicione conteúdo adicional relacionado às avaliações */}
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Outras Informações</h2>
          <p>Adicione outras seções e informações relevantes para o usuário.</p>
          {/* Adicione conteúdo adicional */}
        </section>
      </main>
      <Footer />
    </div>
  );
}
