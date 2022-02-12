import { useSelector } from "react-redux";
import { StoreState } from "../../redux/store";
import { todoSlice } from "../../redux/slice/todo";
import ColumnLayout from "../ColumnLayout";

export function ToDoColumn() {
  const { todo } = useSelector((state: StoreState) => state);
  const { add, remove } = todoSlice;

  return (
    <>
      <ColumnLayout
        category="To do"
        addHandler={add}
        removeHandler={remove}
        selectorState={todo}
        droppableId="todo"
      />
    </>
  );
}
