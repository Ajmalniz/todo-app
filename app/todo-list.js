import Todo from "./todo";

const getTodos = async () => {
  let todos = await fetch("http://localhost:3001/api/todo/list");
  return todos.json();
};

export default async function TodoList() {
  const { todos } = await getTodos();

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t) => {
          return (
            <li key={t.id} class="mb-2  flex justify-center">
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
