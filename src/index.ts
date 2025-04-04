#! node
import { Command } from "commander";
import * as fileHandler from "./fileHandler";
import * as taskHandler from "./taskHandler";

const filePath = "./tasks.json";

const program = new Command();

program.name("Task CLI").description("Add Tasks").version("0.0.1");

program
  .command("add <task>")
  .description("Add a task")
  .action((task: string) => {
    fileHandler.WriteToFile(taskHandler.ConvertInputToTask(task), filePath);
  });
program
  .command("update <id> <description>")
  .description("Update task by ID")
  .option("-p --in-progress", "Mark selected task as in-progress")
  .option("-d --done", "Mark selected task as done")
  .action((id: number, description: string) => {
    fileHandler.WriteToFile(taskHandler.UpdateTask(id, description), filePath);

  });
program.command("delete <number>").description("Delete task by ID");
program.command("lt").description("List all tasks");
program.command("ltd").description("List all tasks marked as done");
program.command("ltn").description("List all tasks marked as not done");
program.command("ltp").description("List all tasks marked as in progress");

program.parse(process.argv);
