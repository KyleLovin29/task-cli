import fs from "fs";
import { Task } from "./types";

const filePath = "./tasks.json";
let tasks: Task[] = [];
let newTask: Task = {
	id: 0,
	description: '',
	status: 'todo',
	createdAt: new Date().toLocaleString('en-US', {month:'2-digit', day:'2-digit', year:'numeric', hour:'numeric', minute:'numeric', second:'numeric', hour12: true}),
	modifiedAt: new Date().toLocaleString('en-US', {month:'2-digit', day:'2-digit', year:'numeric', hour:'numeric', minute:'numeric', second:'numeric', hour12: true})
};

export function ConvertStringToTask(task: string) {

	// Check if the file exists, if not create it
	if (!fs.existsSync(filePath)) {
		fs.writeFileSync(filePath, "[]");
	}
	
	let data = fs.readFileSync(filePath, "utf8");
	
	if (data !== "[]" && data !== "") {
		tasks = JSON.parse(data);

		let idList = tasks.map(task => task.id);
		let incrementId = Math.max(...idList) + 1;

		newTask = {
			id: incrementId,
			description: task,
			status: 'todo',
			createdAt: new Date().toLocaleString('en-US', {month:'2-digit', day:'2-digit', year:'numeric', hour:'numeric', minute:'numeric', second:'numeric', hour12: true}),
			modifiedAt: new Date().toLocaleString('en-US', {month:'2-digit', day:'2-digit', year:'numeric', hour:'numeric', minute:'numeric', second:'numeric', hour12: true})
		};
	} else {
		newTask = {
			id: 1,
			description: task,
			status: 'todo',
			createdAt: new Date().toLocaleString('en-US', {month:'2-digit', day:'2-digit', year:'numeric', hour:'numeric', minute:'numeric', second:'numeric', hour12: true}),
			modifiedAt: new Date().toLocaleString('en-US', {month:'2-digit', day:'2-digit', year:'numeric', hour:'numeric', minute:'numeric', second:'numeric', hour12: true})
		};
	}
	
	tasks.push(newTask);

	return tasks;
}

export function WriteToFile(tasks: Task[]) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  console.log("Task added successfully!");
}
