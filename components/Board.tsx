"use client";
import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Board() {
  const getBoard = useBoardStore((state) => state.getBoard);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  return (
    <div>hello</div>
    // <DragDropContext>

    //   <Droppable droppableId='board' direction='horizontal' type='column'>
    //       {{provided} => <div>{/**Rendering all columns */}</div>}

    //   </Droppable>
    // </DragDropContext>
  );
}

export default Board;
