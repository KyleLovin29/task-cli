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

program.command("update <number>").description("Update task by ID").option('-p --in-progress', 'Mark selected task as in-progress').option('-d --done', 'Mark selected task as done');
program.command("delete <number>").description("Delete task by ID");
program.command("lt").description("List all tasks");
program.command("ltd").description("List all tasks marked as done");
program.command("ltn").description("List all tasks marked as not done");
program.command("ltp").description("List all tasks marked as in progress");

program.parse(process.argv);
