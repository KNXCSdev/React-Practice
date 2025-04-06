import { useDroppable } from "@dnd-kit/core";

export default function ToDoDroppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    border: isOver ? "1px solid green" : undefined,
  };

  return (
    <div
      className="flex h-4/5 w-4/5 flex-col items-center gap-8 text-6xl"
      ref={setNodeRef}
      style={style}
    >
      {props.children}
    </div>
  );
}
