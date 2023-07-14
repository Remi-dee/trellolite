import { ID, databases, storage } from "@/appWrite";
import { getTodosGroupedByColumn } from "@/lib/getTodosByColumn";
import uploadImage from "@/lib/uploadImage";

import { create } from "zustand";

interface BoardState {
  board: Board;
  newTaskInput: string;
  newTaskType: TypeColumn;
  searchString: string;
  image: File | null;

  getBoard: () => void;

  setBoardState: (board: Board) => void;

  updateTodoInDatabase: (todo: Todo, columnId: TypeColumn) => void;

  setSearchString: (searchString: string) => void;
  addTask: (todo: string, columnId: TypeColumn, image?: File | null) => void;
  deleteTask: (taskIndex: number, todoId: Todo, id: TypeColumn) => void;

  setNewTaskInput: (input: string) => void;
  setNewTaskType: (columnId: TypeColumn) => void;
  setImage: (image: File | null) => void;
}

const useBoardStore = create<BoardState>((set, get) => ({
  board: {
    columns: new Map<TypeColumn, Column>(),
  },
  searchString: "",
  newTaskInput: "",
  newTaskType: "todo",
  image: null,
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
  setNewTaskType: (columnId: TypeColumn) => set({ newTaskType: columnId }),
  setImage: (image: File | null) => set({ image }),

  updateTodoInDatabase: async (todo, columnId) => {
    console.log(columnId);
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id,
      { title: todo.title, status: columnId }
    );
  },

  addTask: async (todo: string, columnId: TypeColumn, image?: File | null) => {
    let file: Image | undefined;

    if (image) {
      const fileUploaded = await uploadImage(image);
      if (fileUploaded) {
        file = {
          bucketId: fileUploaded.bucketId,
          fileId: fileUploaded.$id,
        };
      }
    }

    await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      ID.unique(),
      {
        title: todo,
        status: columnId,
        // include image if it exists
        ...(file && { image: JSON.stringify(file) }),
      }
    );

    set({ newTaskInput: "" });

    set((state) => {
      const newColumns = new Map(state.board.columns);
  
      const newTodo: Todo = {
          $id: ID.unique(),
          $createdAt: new Date().toISOString(),
          title: todo,
          status: columnId,
          ...(file && { image: file }),
      };
  
      const column = newColumns.get(columnId);
  
      if (!column) {
          newColumns.set(columnId, {
              id: columnId,
              todos: [newTodo],
          });
      } else {
          column.todos.push(newTodo);
      }
  
      return {
          board: {
              columns: newColumns,
          },
      };
  });
  


    
  },
}));

export { useBoardStore };
