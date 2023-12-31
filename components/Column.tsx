import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";
import { useBoardStore } from "@/store/BoardStore";
import { useModalStore } from "@/store/ModalStore";

type Props = {
  id: TypeColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypeColumn]: string;
} = {
  todo: "Backlog",
  inprogress: "In progress",
  done: "Done",
};

const Column = ({ id, todos, index }: Props) => {
  const [searchString, setNewTaskType] = useBoardStore((state) => [
    state.searchString,
    state.setNewTaskType,
  ]);
  const [openModal] = useModalStore((state) => [state.openModal]);

  const handleAddTodo = () => {
    setNewTaskType(id);
    openModal();
  };
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl shadow-sm   ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-board"
                }`}
              >
                <h2 className="flex justify-between font-bold text-xl p-2">
                  {idToColumnText[id]}
                  <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm font-normal">
                    {!searchString
                      ? todos.length
                      : todos.filter((todo) =>
                          todo.title
                            .toLowerCase()
                            .includes(searchString.toLowerCase())
                        ).length}
                  </span>
                </h2>

                <div className="space-y-2">
                  {todos.map((todo, index) => {
                    if (
                      searchString &&
                      !todo.title.toLowerCase().includes(searchString)
                    ) {
                      return null;
                    }
                    return (
                      <Draggable
                        key={todo.$id}
                        draggableId={todo.$id}
                        index={index}
                      >
                        {(provided) => (
                          <TodoCard
                            todo={todo}
                            index={index}
                            id={id}
                            draggableProps={provided.draggableProps}
                            dragHandleProps={provided.dragHandleProps}
                            // @ts-ignore
                            innerRef={provided.innerRef}
                          />
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}

                  <button
                    onClick={handleAddTodo}
                    className="w-full text-gray-500 hover:text-green-600"
                  >
                    <div className="flex  items-center p-2 ">
                      <PlusCircleIcon className="bg-transparent w-10" />
                      <p className="text-xl px-3">Add a card</p>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
