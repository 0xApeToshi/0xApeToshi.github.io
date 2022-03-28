import * as React from 'react';
import { Container, Grid, Typography, LinearProgress, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from 'react-player/lazy'

const useStyles = makeStyles((theme) => ({
  welcomeImgSx: {
    '@media (max-width:960px)': {
      justifyContent: 'center'
    },
  },
  welcomeTxt: {
    '@media (min-width:960px)': {
      paddingLeft: 45,
    },
    '@media (max-width:960px)': {
      bottom: '-20px',
      paddingTop: '0px',
      textAlign: 'center'
    },
    '@media (max-width:660px)': {
      bottom: '-10px',
      paddingTop: '0px',
    },
  },
  welcomeContent: {
    marginTop: "59px",
  }
}));


const Projects = () => {
  const classes = useStyles();

  return (
    <Grid id="projects" container item>
      <Container>
        <Grid container style={{ paddingTop: 80 }}>
          {/* <Grid container item md={5} direction="column" data-aos="fade-right">
            <Grid container item justifyContent="center" className={classes.welcomeImgSx}>
              <ReactPlayer url='/' loop={true} playing={true} controls={false} muted={true} />
            </Grid>
          </Grid> */}
          <Grid container item md={7} direction="column" className={classes.welcomeTxt} data-aos="fade-left">
            <Typography variant="h1" style={{ fontWeight: 400 }}>
              Other Projects
            </Typography>
            <Typography variant="h3" className={classes.welcomeContent}>
              In the past, Ape Toshi built many things. Some of his favorites are: <br /><br />
              <li>  A register-based virtual machine in C</li>
              <li>  Hacking a 2003 single player game into a two-player co-op (C++)</li>
              <li>  N-body simulation of the solar system</li>
              <li>  Financial exchange simulation (order book model)</li>
              <li>  Discord bots for NFT verification</li>
              <br />
              He also knows how to create generative art in <a href="https://p5js.org/">p5.js</a> and knows the basics of Inkscape and 3d
              modeling in Blender. <br /><br />
              His most recent contributions include building and deploying ERC721, ERC20,
              staking, and other custom contracts.
              <br /><br />
              <br /><br />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Projects;