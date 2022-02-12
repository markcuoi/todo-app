import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { StoreState } from "../../redux/store";
import { doneSlice } from "../../redux/slice/done";
import ColumnLayout from "../ColumnLayout";

export function DoneColumn() {
  const { done } = useSelector((state: StoreState) => state);
  const { add, remove } = doneSlice;

  return (
    <>
      <ColumnLayout
        // labelText="Type 'done' item"
        category="Completed"
        removeHandler={remove}
        addHandler={add}
        selectorState={done}
        droppableId="done"
      />
    </>
  );
}
