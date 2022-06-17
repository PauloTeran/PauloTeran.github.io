import { Box, Typography } from "@mui/material";

export const HomePortfolioSection = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "2.5rem" }}
      >
        <Typography
          variant="body1"
          align="center"
          sx={{ maxWidth: "45rem", marginBottom: "1.5rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          laoreet felis at lectus rutrum, nec efficitur dui accumsan. Sed
          pharetra accumsan ornare. Aenean augue nibh, sodales nec justo at,
          ultricies auctor sem. Praesent suscipit nulla quis sollicitudin
          egestas. Donec sagittis odio sed libero aliquam.
        </Typography>
        <Typography variant="h4" align="center" sx={{ marginBottom: "1.5rem" }}>
        PORTFOLIO
      </Typography>
      </Box>
    </>
  );
};
