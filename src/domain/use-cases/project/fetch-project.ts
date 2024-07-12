import { Project } from "../../entities/project/project";

export interface FetchProject {
  list(): Promise<Project[]>
}