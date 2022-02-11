import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { StoreState } from "../../redux/store";
import { todoSlice } from "../../redux/slice/todo";
import ColumnLayout from "../ColumnLayout";

export function ToDoColumn() {
  const { todo } = useSelector((state: StoreState) => state);
  const { add, remove } = todoSlice;

  return (
    <>
      <Typography mb={3}>All todo tasks: {todo.length}</Typography>
      <ColumnLayout
        addHandler={add}
        removeHandler={remove}
        selectorState={todo}
      />
    </>
  );
}
