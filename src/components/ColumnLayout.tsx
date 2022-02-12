import React, { useState } from "react";
import { IColumnLayoutProps } from "../types";
import { useDispatch } from "react-redux";
import { StoreDispatch } from "../redux/store";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { Droppable, Draggable } from "react-beautiful-dnd";

const ColumnLayout: React.FC<IColumnLayoutProps> = ({
  category,
  addHandler,
  removeHandler,
  selectorState,
  droppableId,
}) => {
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
  console.log("ch", selectorState);
  return (
    <Box
      borderRadius={3}
      width="100%"
      sx={{ boxShadow: 2, p: 2, bgcolor: "#e7f5ff" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        fontSize="1.4"
        fontWeight={600}
        mb={2}
      >
        <Grid item>{category}</Grid>
        <Grid item>{selectorState.length}</Grid>
      </Grid>

      <TextField
        fullWidth
        label="Outlined"
        variant="outlined"
        size="small"
        sx={{ bgcolor: "#e9ecef" }}
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

      <Droppable droppableId={droppableId}>
        {(provided) => (
          <List
            sx={{ minHeight: "500px" }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {selectorState.map(
              (
                { id, text, isFinished, createdAt, updatedAt },
                index: number
              ) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                      <ListItem
                        sx={{
                          transition: ".3s ease background-color",
                          color: snapshot.isDragging ? "#fff" : "#000",
                          bgcolor: snapshot.isDragging ? "#000" : "#fff",

                          position: "relative",
                          border: "1px solid #989898",

                          mt: 1,
                          mb: 2,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                        }}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ListItemText
                          sx={{
                            textDecoration: isFinished
                              ? "line-through"
                              : "none",
                            wordBreak: "break-word",
                          }}
                        >
                          <Box width="100%">{text}</Box>

                          <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            fontSize=".7rem"
                          >
                            <Grid item xs={10}>
                              {updatedAt ? "Updated" : "Created"} at:{" "}
                              {updatedAt || createdAt}
                            </Grid>
                            <Grid item xs={2}>
                              <IconButton
                                onClick={() => dispatch(removeHandler(id))}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </ListItemText>
                      </ListItem>
                    )}
                  </Draggable>
                );
              }
            )}
          </List>
        )}
      </Droppable>
    </Box>
  );
};

export default ColumnLayout;
