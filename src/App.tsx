import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Container>
      <Typography textAlign="center" variant="h3" mt={3} mb={5}>
        This is a ToDo APP with Redux
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item md={4}>
          ...
        </Grid>
        <Grid item md={4}>
          ...
        </Grid>
        <Grid item md={4}>
          ...
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
