#! node
import { Command } from "commander";
import { Task } from "./types";
import * as fileHandler from "./fileHandler";

const program = new Command();

program
  .name("Task CLI")
  .description("Add Tasks")
  .version("0.0.1")
  .command("add <task>")
  .description("Add a task")
  .action((task: string) => {
    fileHandler.WriteToFile(fileHandler.ConvertStringToTask(task));
  });

program.command("update <number>").description("Update a task");

program.parse(process.argv);
