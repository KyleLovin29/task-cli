import { Task } from "./types";
import fs from "fs";

let tasks: Task[] = fs.existsSync("./tasks.json")
  ? JSON.parse(fs.readFileSync("./tasks.json", "utf-8"))
  : [];
let newTask: Task;

export function ConvertInputToTask(task: string) {
  let incrementId: number;
  let idList: number[];

  if (tasks.length > 0) {
    idList = tasks.map(task => task.id);
    incrementId = Math.max(...idList) + 1;
  } else {
    incrementId = 1;
  }


  newTask = {
    id: incrementId,
    description: task,
    status: "todo",
    createdAt: new Date().toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    }),
    modifiedAt: new Date().toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    }),
  };

  tasks.push(newTask);

  return tasks;
}
