"use client";

import { useBoardStore } from "@/store/BoardStore";

const types = [
  {
    id: "todo",
    name: "Todo",
    description: "A newtask to be completed",
    color: "bg-red-500",
  },

  {
    id: "inprogress",
    name: "In Progress",
    description: "A task currently being worked on",
    color: "bg-yellow-500",
  },

  {
    id: "todo",
    name: "Todo",
    description: "Todo",
    color: "bg-green-500",
  },
];

function TaskTypeRadioGroup() {
  const [newTaskInput, setNewTaskInput] = useBoardStore((state) => [
    state.newTaskInput,
    state.setNewTaskInput,
  ]);
  return (
    <div className="w-full py-5">
      <div className="mx-auto w-full max-w-md"></div>
    </div>
  );
}

export default TaskTypeRadioGroup;
