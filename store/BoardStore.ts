import { databases } from "@/appWrite";
import { getTodosGroupedByColumn } from "@/lib/getTodosByColumn";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoInDatabase: (todo: Todo, ColumnId: TypeColumn) => void;
}

const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypeColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },

  setBoardState: (board) => set({ board }),

  updateTodoInDatabase: async (todo, ColumnId) => {
    await databases.updateDocument(
      process.env.Next_PUBLIC_DATABASE_ID!,
      process.env.Next_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id,
      {
        title: todo.title,
        status: ColumnId,
      }
    );
  },
}));

export { useBoardStore };

