#! node
import { Command } from 'commander';
import fs from 'fs';

const program = new Command();

type Task = {
	id: number,
	description: string,
	status: 'todo' | 'in-progress' | 'done',
	createdAt: Date,
	modifiedAt: Date,
}

program
	.name("Task CLI")
	.description("Add Tasks")
	.version("0.0.1")
	.command('add <task>')
	.description('Add a task')
	.action((task) => {
		let currentDate = Date.now;
		let userTask: Task = {
			id: 2,
			description: task,
			status: 'todo',
			createdAt: new Date(),
			modifiedAt: new Date()
		}
	})

program
	.command('update <number>')
	.description('Update a task')



program.parse(process.argv);