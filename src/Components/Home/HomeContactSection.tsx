import { Box, Typography } from "@mui/material";
import cover from "../../Assets/CoverImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const HomeContactSection = () => {
  return (
    <Box
      sx={{
        paddingTop: "7rem",
        paddingBottom: "7rem",
        marginBottom: "2.5rem",
        backgroundImage: `url(${cover})`,
        backgroundColor: "#eeeeee",
        backgroundBlendMode: "overlay",
        textAlign: "center"
      }}
    >
      <Typography
        variant="body1"
        align="center"
        sx={{ marginBottom: "1rem" }}
      >
        Let's keep in touch, follow me on social media.
      </Typography>
      <Box flexDirection={"row"} textAlign={"center"}>
        <a
          href="https://twitter.com/LPauloDev"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            fontSize="2.5rem"
            color="#000000"
            style={{ padding: "0.5rem" }}
          />
        </a>
        <a
          href="https://www.facebook.com/LPauloDev"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            fontSize="2.5rem"
            color="#000000"
            style={{ padding: "0.5rem" }}
          />
        </a>
        <a
          href="https://www.instagram.com/LPauloDev"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            fontSize="2.5rem"
            color="#000000"
            style={{ padding: "0.5rem" }}
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCvX_PN7S6pX48nf5xVCuivA"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            fontSize="2.5rem"
            color="#000000"
            style={{ padding: "0.5rem" }}
          />
        </a>
        <a
          href="https://www.twitch.tv/lpaulodev"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitch}
            fontSize="2.5rem"
            color="#000000"
            style={{ padding: "0.5rem" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/lpaulodev"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            fontSize="2.5rem"
            color="#000000"
            style={{ padding: "0.5rem" }}
          />
        </a>
      </Box>
      <Typography
        variant="body1"
        align="center"
        sx={{ marginTop: "2rem", marginBottom: "1rem" }}
      >
        Or send me an email.
      </Typography>
      <a
          href="mailto: lpaulodev@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            fontSize="2.5rem"
            color="#000000"
          />
        </a>
    </Box>
  );
};
