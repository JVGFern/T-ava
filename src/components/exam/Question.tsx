import { Pergunta } from "./Exam";

interface QuestionProps {
  pergunta: Pergunta;
}

export default function Question({ pergunta }: QuestionProps) {
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false
      });
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes((prevCheckboxes) => ({
          ...prevCheckboxes,
          [name]: checked
        }));
      };
  
    return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">{pergunta.pergunta}</h2>
      {pergunta.tipo === 0 ? (
        <QuestionDissertativa />
      ) : pergunta.tipo === 1 ? (
        <QuestionMultipla />
      ) : pergunta.tipo === 3 ? (
        <QuestionArg />
      ) : (
        ""
      )}
      <p>Adicione outras seções e informações relevantes para o usuário.</p>
      {/* Adicione conteúdo adicional */}
    </section>
  );
}

interface QuestionMultiplaProps {}

function QuestionMultipla({ perguntas }: QuestionProps) {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">{pergunta.pergunta}</h2>

      <p>Adicione outras seções e informações relevantes para o usuário.</p>
    </section>
  );
}

function QuestionDissertativa({ pergunta }: QuestionProps) {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">{pergunta.pergunta}</h2>
      <label>
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
        />
        Checkbox 3
      </label>
    </section>
  );
}

function QuestionArg() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">{pergunta.pergunta}</h2>

      <p>Adicione outras seções e informações relevantes para o usuário.</p>
    </section>
  );
}
