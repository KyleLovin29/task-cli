#! node
import { Command } from "commander";
import { Task } from "./types";
import * as fileHandler from "./fileHandler";

const program = new Command();

const filePath = "./tasks.json";

program
  .name("Task CLI")
  .description("Add Tasks")
  .version("0.0.1")
  .command("add <task>")
  .description("Add a task")
  .action((task) => {
    let currentDate = Date.now;
    let userTask: Task = {
      id: 2,
      description: task,
      status: "todo",
      createdAt: new Date(),
      modifiedAt: new Date(),
    };

    fileHandler.WriteToFile(userTask);
  });

program.command("update <number>").description("Update a task");

program.parse(process.argv);
