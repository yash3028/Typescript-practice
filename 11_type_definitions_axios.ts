import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

async function getTodo(id: number): Promise<Todo> {
  const response = await axios.get<Todo>(`https://example.com/todos/${id}`);

  return response.data;
}
