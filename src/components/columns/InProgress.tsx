import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { StoreState } from "../../redux/store";
import { inProgressSlice } from "../../redux/slice/inProgress";
import ColumnLayout from "../ColumnLayout";

export function InProgressColumn() {
  const { inProgress } = useSelector((state: StoreState) => state);
  const { add, remove } = inProgressSlice;

  return (
    <>
      <Typography mb={3}>All inProgress tasks: {inProgress?.length}</Typography>
      <ColumnLayout
        // labelText="Type 'in progress' item"
        addHandler={add}
        removeHandler={remove}
        selectorState={inProgress}
      />
    </>
  );
}
