import * as React from 'react';
import { Container, Grid, Typography, LinearProgress, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from 'react-player'

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
        <Grid container style={{ paddingTop: 100 }}>
          <Grid container item md={5} direction="column" data-aos="fade-right">
            <Grid container item justifyContent="center" className={classes.welcomeImgSx}>
              <ReactPlayer url='genart.mp4' loop={true} playing={true} controls={false} muted={true} />
            </Grid>
          </Grid>
          <Grid container item md={7} direction="column" className={classes.welcomeTxt} data-aos="fade-left">
            <Typography variant="h1" style={{ fontWeight: 400 }}>
              CyberKong #4674 is for about
            </Typography>
            <Typography variant="h3" className={classes.welcomeContent}>
              In the past, Ape Toshi built many things. Some of his favorites are: <br /><br />
              - A register-based virtual machine in C<br />
              - Hacking a 2003 single player game into a two-player co-op (C++)<br />
              - N-body simulation of the solar system<br />
              - Financial exchange simulation (order book model)<br />
              - Discord bots for NFT verification<br /><br />
              He also knows how to create generative art in p5.js and knows the basics of Inkscape and 3d
              modeling in Blender. His most recent contributions include building and deploying ERC721, ERC20,
              staking, and other custom contracts.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Projects;