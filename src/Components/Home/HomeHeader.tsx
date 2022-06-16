import { Avatar, Box, Link, Typography } from "@mui/material";
import cover from "../../Assets/CoverImage.jpg";
import avatar from "../../Assets/Avatar.png";

export const HomeHeader = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img
          src={cover}
          alt="Programming"
          width="100%"
          height="100%"
          object-fit="contain"
        />
        <Avatar
          alt="Luis Paulo Terán"
          src={avatar}
          sx={{
            width: "30%",
            height: "auto",
            maxWidth: "22rem",
            maxHeight: "22rem",
            marginTop: "-10%",
            marginBottom: "3.75rem",
          }}
        />
        <Typography
          variant="h3"
          align="center"
          sx={{ marginBottom: "1.25rem" }}
        >
          LUIS PAULO DEV
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ maxWidth: "34rem", marginBottom: "1.875rem" }}
        >
          yadda yadda yadda yadda yadda yadda yadda yadda yadda yadda yadda
          yadda yadda yadda yadda yadda yadda yadda yadda yadda yadda yadda
          yadda yadda{" "}
        </Typography>
        <Link
          href="/#/About"
          variant="body1"
          align="center"
          sx={{ fontWeight: "bold", marginBottom: "2.5rem" }}
        >
          LEER MAS
        </Link>
      </Box>
    </>
  );
};
