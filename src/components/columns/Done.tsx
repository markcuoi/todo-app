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
      <Typography mb={3}>All done tasks: {done.length}</Typography>
      <ColumnLayout
        // labelText="Type 'done' item"
        removeHandler={remove}
        addHandler={add}
        selectorState={done}
      />
    </>
  );
}
