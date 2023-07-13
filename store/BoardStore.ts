import { databases, storage } from "@/appWrite";
import { getTodosGroupedByColumn } from "@/lib/getTodosByColumn";
import { Storage } from "appwrite";
import { create } from "zustand";

interface BoardState {
  board: Board;
  newTaskInput: string;
  newTaskType:TypeColumn;
  searchString: string;

 
  getBoard: () => void;
  
  setBoardState: (board: Board) => void;
 
  updateTodoInDatabase: (todo: Todo, columnId: TypeColumn) => void;

  setSearchString: (searchString: string) => void;

  deleteTask: (taskIndex: number, todoId: Todo, id: TypeColumn) => void;

  setNewTaskInput: (input: string) => void;
  setNewTaskType: (columnId: TypeColumn) => void;
}

const useBoardStore = create<BoardState>((set, get) => ({
  board: {
    columns: new Map<TypeColumn, Column>(),
  },
  searchString: "",
  newTaskInput: "",
  newTaskType: "todo",
  setSearchString: (searchString) => set({ searchString }),
  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },

  setBoardState: (board) => set({ board }),

  deleteTask: async (taskIndex: number, todo: Todo, id: TypeColumn) => {
    const newColumns = new Map(get().board.columns);

    newColumns.get(id)?.todos.splice(taskIndex, 1);
    set({ board: { columns: newColumns } });
    if (todo.image)
      await storage.deleteFile(todo.image.bucketId, todo.image.fileId);

    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id
    );
  },

  setNewTaskInput: (input: string) => set({ newTaskInput: input }),
  setNewTaskType: (columnId: TypeColumn) => set({newTaskType: columnId});

  updateTodoInDatabase: async (todo, columnId) => {
    console.log(columnId);
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id,
      { title: todo.title, status: columnId }
    );
  },
}));

export { useBoardStore };
