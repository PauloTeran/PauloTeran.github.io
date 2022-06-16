import { Box, Grid, Typography } from "@mui/material";
import programming from "../../Assets/ProgrammingPhoto.jpg";

export const HomePhotosSection = () => {
  return (
    <Box sx={{ marginBottom: "2.5rem" }}>
      <Grid
        container
        direction="row"
        spacing={0}
        justifyContent="space-evenly"
        alignItems={"center"}
      >
        <Grid item xs={10} md={5}>
          <img
            src={programming}
            alt="Programming"
            width="100%"
            height="auto"
            object-fit="contain"
          />
        </Grid>
        <Grid item xs={10} md={5}>
          <Typography variant="h4" sx={{ marginBottom: "1.25rem" }}>
            LUIS PAULO DEV
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "34rem", marginBottom: "1.875rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            laoreet felis at lectus rutrum, nec efficitur dui accumsan. Sed
            pharetra accumsan ornare. Aenean augue nibh, sodales nec justo at,
            ultricies auctor sem. Praesent suscipit nulla quis sollicitudin
            egestas. Donec sagittis odio sed libero aliquam.
          </Typography>
        </Grid>
        <Grid item xs={10} md={5}>
          <Typography variant="h4" sx={{ marginBottom: "1.25rem" }}>
            LUIS PAULO DEV
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "34rem", marginBottom: "1.875rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            laoreet felis at lectus rutrum, nec efficitur dui accumsan. Sed
            pharetra accumsan ornare. Aenean augue nibh, sodales nec justo at,
            ultricies auctor sem. Praesent suscipit nulla quis sollicitudin
            egestas. Donec sagittis odio sed libero aliquam.
          </Typography>
        </Grid>
        <Grid item xs={10} md={5}>
          <img
            src={programming}
            alt="Programming"
            width="100%"
            height="auto"
            object-fit="contain"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
