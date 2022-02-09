import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ToDoColumn } from "./components/columns/ToDo";

import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
  return (
    <Container>
      <Typography textAlign="center" variant="h3" mt={3} mb={5}>
        ToDo APP
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <DragDropContext onDragEnd={() => null}>
          <Grid item md={4}>
            <ToDoColumn />
          </Grid>
          <Grid item md={4}>
            {/* <InProgressColumn /> */}
          </Grid>
          <Grid item md={4}>
            {/* <DoneColumn /> */}
          </Grid>
        </DragDropContext>
      </Grid>
    </Container>
  );
}

export default App;
