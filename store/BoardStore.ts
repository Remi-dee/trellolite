import { databases } from "@/appWrite";
import { getTodosGroupedByColumn } from "@/lib/getTodosByColumn";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoInDatabase: (todo: Todo, ColumnId: TypeColumn) => void;

  searchString: string;
  setSearchString: (searchString: string) => void;
}

const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypeColumn, Column>(),
  },
  searchString: "",
  setSearchString: (searchString) => set({ searchString }),
  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },

  setBoardState: (board) => set({ board }),

  updateTodoInDatabase: async (todo, ColumnId) => {
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id,
      { title: todo.title, status: ColumnId }
    );
  },
}));

export { useBoardStore };

//databases.updateDocument('[DATABASE_ID]', '[COLLECTION_ID]', '[DOCUMENT_ID]');
