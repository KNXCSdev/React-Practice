import { DndContext } from "@dnd-kit/core";
import ToDoDroppable from "./ToDoDroppable";
import ToDoDraggable from "./ToDoDraggable";
import { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "buy milk", status: "to-do" },
    { id: 2, text: "wash bike", status: "done" },
    { id: 3, text: "do the budget", status: "to-do" },
    { id: 4, text: "call jane", status: "to-do" },
  ]);

  const [inputValue, setInputValue] = useState("");

  const statusToDo = todos.filter((todo) => todo.status === "to-do");
  const statusInProgress = todos.filter(
    (todo) => todo.status === "in-progress",
  );
  const statusDone = todos.filter((todo) => todo.status === "done");

  function handleDragEnd(event) {
    const { over, active } = event;
    const status = over?.id;

    setTodos((prev) =>
      prev.map((todo) => (todo.id === active.id ? { ...todo, status } : todo)),
    );
  }

  function handleAddTodo(e) {
    e.preventDefault();
    setTodos((prev) => {
      return [
        ...prev,
        { id: prev.length + 1, text: inputValue, status: "to-do" },
      ];
    });
    setInputValue("");
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="mt-24 flex flex-col gap-6">
        <h1 className="text-4xl uppercase"> To Do List</h1>
        <form className="mb-10 flex gap-4 text-2xl">
          <input
            type="text"
            className="w-[30rem] border px-6 py-4"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="border border-blue-200 px-6 py-4"
            onClick={handleAddTodo}
          >
            Add Task
          </button>
        </form>
        <div className="flex h-[64rem] gap-24">
          <div className="flex w-full flex-col items-center gap-24 border border-blue-400 p-12">
            <h2 className="text-4xl font-medium uppercase">To Do</h2>

            <ToDoDroppable id={"to-do"}>
              {statusToDo?.map((todo) => (
                <ToDoDraggable key={todo.id} id={todo.id}>
                  {todo.text}
                </ToDoDraggable>
              ))}
            </ToDoDroppable>
          </div>

          <div className="flex w-full flex-col items-center gap-24 border border-blue-400 p-12">
            <h2 className="text-4xl font-medium uppercase">In progress</h2>
            <ToDoDroppable id={"in-progress"}>
              {statusInProgress?.map((todo) => (
                <ToDoDraggable key={todo.id} id={todo.id}>
                  {todo.text}
                </ToDoDraggable>
              ))}
            </ToDoDroppable>
          </div>

          <div className="flex w-full flex-col items-center gap-24 border border-blue-400 p-12">
            <h2 className="text-4xl font-medium uppercase">Done</h2>
            <ToDoDroppable id={"done"}>
              {statusDone?.map((todo) => (
                <ToDoDraggable key={todo.id} id={todo.id}>
                  {todo.text}
                </ToDoDraggable>
              ))}
            </ToDoDroppable>
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default ToDoList;
