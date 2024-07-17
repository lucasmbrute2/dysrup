import { Project } from "../../App";

export function Card({ name, description, started_at }: Project) {
  return (
    <div className="bg-slate-600 rounded-md p-4 mt-4">
      <p>Projeto: {name}</p>
      <p>Descrição:{description}</p>
      <p>Data de início: {started_at}</p>
    </div>
  );
}
