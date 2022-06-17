import { Box, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const HomeTechnologiesSection = () => {
  return (
    <Box
      sx={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
        marginBottom: "2.5rem",
        backgroundColor: "#eeeeee",
      }}
    >
      <Typography variant="h4" align="center" sx={{ marginBottom: "1.5rem" }}>
        TECH STACK
      </Typography>
      <Grid
        container
        direction="row"
        spacing={3}
        justifyContent="space-evenly"
        alignItems={"flex-start"}
      >
        <Grid item xs={6} sm={4} lg={2} textAlign="center">
          <FontAwesomeIcon icon={faHtml5} fontSize="5rem" color="#e34c26" />
          <Typography variant="body1">HTML5</Typography>
        </Grid>
        <Grid item xs={6} sm={4} lg={2} textAlign="center">
          <FontAwesomeIcon icon={faCss3Alt} fontSize="5rem" color="#264de4" />
          <Typography variant="body1">CSS3</Typography>
        </Grid>
        <Grid item xs={6} sm={4} lg={2} textAlign="center">
          <FontAwesomeIcon icon={faJs} fontSize="5rem" color="#f0db4f" />
          <Typography variant="body1">
            Javascript
            <br />
            Typescript
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} lg={2} textAlign="center">
          <FontAwesomeIcon icon={faCopyright} fontSize="5rem" color="#9b4993" />
          <Typography variant="body1">C#</Typography>
        </Grid>
        <Grid item xs={6} sm={4} lg={2} textAlign="center">
          <FontAwesomeIcon icon={faDatabase} fontSize="5rem" color="#0089d0" />
          <Typography variant="body1">
            SQL Server
            <br />
            PostgreSQL
            <br />
            MongoDB
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} lg={2} textAlign="center">
          <FontAwesomeIcon icon={faGithub} fontSize="5rem" color="#333000" />
          <Typography variant="body1">
            Git
            <br />
            GitHub
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
