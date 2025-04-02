export type Task = {
	id: number;
	description: string;
	status: "todo" | "in-progress" | "done";
	createdAt: string;
	modifiedAt: string;
  };