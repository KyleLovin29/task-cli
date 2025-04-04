import fs from "fs";
import { Task } from "./types";

export function WriteToFile(tasks: Task[], filePath: string) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  console.log("Task added successfully!");
}
