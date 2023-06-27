import Question from "./Question";
import jsonExam from "../../data/Exam.json";
import { useState } from "react";

export interface ExamData {
  nome: string;
  descricao: string;
  perguntas: Pergunta[];
}

export interface Pergunta {
  tipo: number;
  pergunta: string;
  respostas?: string[];
}

export default function Exam() {
  const data: ExamData = jsonExam[0];
  const [prova, setProva] = useState(data);
  return (
    <div className="flex flex-col min-h-screen">
      {data.nome}
      {data.descricao}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {data.perguntas.map((pergunta, index) => (
          <Question key={index} pergunta={pergunta} />
        ))}
      </main>
    </div>
  );
}
