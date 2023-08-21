import AddNewTodo from './add-new-todo'
import TodoList from './todo-list'
export default function Home() {
  return (
    <div class=" container mx-auto p-4">
  <AddNewTodo />
  <TodoList />
  </div>
    )
}
