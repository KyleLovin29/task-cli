import fs from "fs";
import { Task } from "./types";

const filePath = "./tasks.json";
let tasks: Task[] = [];

export function WriteToFile(task: Task) {
  // Check if the file exists, if not create it
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]");
  }

  let data = fs.readFileSync(filePath, "utf8");

  if (data !== "[]" && data !== "") {
    tasks = JSON.parse(data);
  }

  tasks.push(task);

  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  console.log("Task added successfully!");
}
