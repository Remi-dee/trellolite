"use client";

import { CircleStackIcon, XCircleIcon } from "@heroicons/react/24/solid";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,

} from "react-beautiful-dnd";

type Props = {
  todo: Todo;
  index: number;
  id: TypeColumn;
  innerRef: { element: HTMLElement | null } 
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

function TodoCard({
  todo,
  index,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) {
  return (
    <div
    className="bg-white rounded-md space-y-2 drop-shadow-md"
    {...draggableProps} {...dragHandleProps} ref={innerRef}>
      <div className="flex justify-between items-center p-5">
        <p>{todo.title}</p>
        <button type="button" className="text-red-500 hover:text-red-600">
            <XCircleIcon className="ml-5 h-8 w-8"/>
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
