"use client";

import { useBoardStore } from "@/store/BoardStore";
import { RadioGroup } from "@headlessui/react";

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
  const [newTaskType, setNewTaskType] = useBoardStore((state) => [
    state.newTaskType,
    state.setNewTaskType,
  ]);
  return (
    <div className="w-full py-5">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={newTaskType} onChange={(e) => setNewTaskType(e)}>
        
        <div className="space-y-2"></div>
          <RadioGroup.Label>Plan</RadioGroup.Label>
          <RadioGroup.Option value="startup">
            {({ checked }) => (
              <span className={checked ? "bg-blue-200" : ""}>Startup</span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="business">
            {({ checked }) => (
              <span className={checked ? "bg-blue-200" : ""}>Business</span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="enterprise">
            {({ checked }) => (
              <span className={checked ? "bg-blue-200" : ""}>Enterprise</span>
            )}
          </RadioGroup.Option>
        </RadioGroup>
      </div>
    </div>
  );
}

export default TaskTypeRadioGroup;
