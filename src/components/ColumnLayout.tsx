import React, { useDebugValue, useState } from "react";
import { useDispatch } from "react-redux";
import { StoreDispatch } from "../redux/store";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { Droppable, Draggable } from "react-beautiful-dnd";

const ColumnLayout: React.FC<{
  addHandler: any;
  selectorState: any;
}> = ({ addHandler, selectorState }) => {
  const dispatch = useDispatch<StoreDispatch>();

  const [textDescription, setTextDescription] = useState("");

  const [isError, setIsError] = useState({
    isShow: false,
    text: "",
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let todoDescription: string = event.target.value;
    setTextDescription(todoDescription);
    setIsError({
      isShow: todoDescription.length > 200,
      text:
        todoDescription.length > 200
          ? "The input value cannot be more than 200 character"
          : "",
    });
  };

  const handleOnClick = () => {
    if (!isError.isShow) {
      dispatch(addHandler(textDescription));
      setTextDescription("");
    }
  };

  return (
    <Box borderRadius={1} width="100%" sx={{ boxShadow: 2, p: 3 }}>
      <TextField
        fullWidth
        label="Outlined"
        variant="outlined"
        size="small"
        value={textDescription}
        onChange={handleOnChange}
      />
      <Collapse in={isError.isShow}>
        <Alert severity="error" sx={{ my: 1 }}>
          {isError.text}
        </Alert>
      </Collapse>
      <Box width="100%" display="flex" justifyContent="center">
        <Button
          size="medium"
          fullWidth
          variant="contained"
          sx={{ my: 1, maxWidth: 150 }}
          disabled={
            textDescription.length === 0 || textDescription.length > 200
          }
          onClick={handleOnClick}
        >
          ADD ITEM
        </Button>
      </Box>

      <List sx={{ minHeight: "300px" }}>a</List>
    </Box>
  );
};

export default ColumnLayout;
