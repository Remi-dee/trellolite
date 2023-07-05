"use client";
import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./Column";

function Board() {
  const [board, getBoard, setBoardState] = useBoardStore((state) => [
    state.board,
    state.getBoard,
    state.setBoardState,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleDnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;
    //check if user dragged outside
    if (!destination) return;

    //Handle column drag
    if (type === "column") {
      {
        const entries = Array.from(board.columns.entries());
        const [removed] = entries.splice(source.index, 1);
        entries.splice(destination.index, 0, removed);
        console.log(entries)
        console.log(entries.splice(destination.index, 0, removed))
        const rearrangedColumns = new Map(entries);
        console.log(rearrangedColumns)
        setBoardState({
          ...board,
          columns: rearrangedColumns,
        });
      }
    }

    //This step is needed as the indexes are stored as numbers 0,1,2 ... instead of id's with DND library
const column = Array
   
  };
  console.log(board);
  return (
    <DragDropContext onDragEnd={handleDnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {/**Rendering all columns */}
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column key={id} id={id} todos={column.todos} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
