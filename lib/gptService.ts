const formatTodosForAi = (board: Board) => {
  console.log("hey format");
  console.log(board)
  const todos = Array.from(board.columns.entries());
  const flatArray = todos.reduce((map, [key, value]) => {
    map[key] = value.todos;
    return map;
  }, {} as { [key in TypeColumn]: Todo[] });

  // reduce to key: value(length)
  const flatArrayCounted = Object.entries(flatArray).reduce(
    (map, [key, value]) => {
      map[key as TypeColumn] = value.length;
      return map;
    },
    {} as { [key in TypeColumn]: number }
  );
  return flatArrayCounted;
};

const fetchSuggestion = async (board: Board) => {
  const todos = formatTodosForAi(board);
  console.log("Formatted todos", todos);
  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todos }),
  });

  const GPTdata = await res.json();
  const { content } = GPTdata;

  return content;
};

export { fetchSuggestion };
