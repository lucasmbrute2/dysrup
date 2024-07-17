import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./utils/axios";
import { CardExpansable } from "./components/Card";

export type Task = {
  id: string;
  title: string;
  description: string;
  finished_at: null;
  project_id: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  started_at: string;
  tasks: Task[];
};

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchTasks = async () => {
    try {
      const { data } = await api.get("/project");
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <h1 className="mt-4 font-poppins text-white">Projetos</h1>

      <div className="mt-8 flex justify-end">
        <button className="items-end">Novo projeto</button>
      </div>

      <div className="mt-8">
        {projects.map((project) => (
          <div key={project.id}>
            <CardExpansable {...project} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
