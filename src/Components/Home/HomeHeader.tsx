import { Avatar, Box, Link, Typography } from "@mui/material";
import cover from "../../Assets/CoverImage.jpg";
import avatar from "../../Assets/Avatar.png";
import logo from "../../Assets/logo.svg";

export const HomeHeader = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "2.5rem" }}
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
          LUIS PAULO TERÁN
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ maxWidth: "34rem", marginBottom: "1.875rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          laoreet felis at lectus rutrum, nec efficitur dui accumsan. Sed
          pharetra accumsan ornare. Aenean augue nibh, sodales nec justo at,
          ultricies auctor sem. Praesent suscipit nulla quis sollicitudin
          egestas. Donec sagittis odio sed libero aliquam.
        </Typography>
        <img
          src={logo}
          alt="LP"
          width="72px"
          height="72px"
          style={{ marginBottom: "1.87rem" }}
        />
        <Link
          href="/#/About"
          variant="body1"
          align="center"
          sx={{ fontWeight: "bold", width: "8rem" }}
        >
          READ MORE
        </Link>
      </Box>
    </>
  );
};
