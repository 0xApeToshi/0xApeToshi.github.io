import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from 'next/image'
import apetoshiImage from 'public/apetoshi.png';
import dappDexImage from 'public/dapp-dexterity-banner.png';
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
  welcomeTxt1: {
    '@media (min-width:960px)': {
      paddingRight: 45,
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
  welcomeSpace: {
    '@media (max-width:960px)': {
      position: 'relative'
    },
  },
  welcomeTitle: {
    fontWeight: 100,
  },
  welcomeContent: {
    marginTop: "59px",
  },
  apetoshiProfile: {
    border: '10px solid white',
    borderRadius: 20,
    boxSizing: 'border-box',
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  }
}));


const About = () => {
  const classes = useStyles();

  return (
    <Grid id="welcome" container item>
      <Container>
        <Grid container alignItems="center" style={{ padding: 20, marginTop: 100 }}>
          <Grid container item md={5} direction="column" data-aos="fade-right">
            <Grid container item justifyContent="center" className={classes.welcomeImgSx}>
              <Image width={350} height={350} className={classes.apetoshiProfile} src={apetoshiImage} loading="lazy" alt="welcome" />
            </Grid>
          </Grid>
          <Grid container item md={7} direction="column" className={classes.welcomeTxt} data-aos="fade-left">
            <Typography variant="h1" className={classes.welcomeTitle}>
              CyberKong #4674
            </Typography>
            <Typography variant="h3" className={classes.welcomeContent}>
              Ape Toshi is a Physics student with a passion for CS and a GitHub Arctic Code Vault contributor on his main GitHub account.<br /><br />
              Sometimes he'll dox himself, but he mostly prefers to keep his privacy.<br /><br />
              Every summer he volunteers as a mentor for STEM workshops meant for primary school and high school studentsHe got into crypto and NFTs in 2021 and realized his talent for Solidity and web3. <br /><br /> He became a successful smart contract developer which enabled him to transition to entrepreneurship; a venture he funds on his own.
            </Typography>
          </Grid>
          <Grid container item md={7} direction="column" className={classes.welcomeTxt1} data-aos="fade-right">
            <Typography variant="h3" className={classes.welcomeContent}>
              He is the founder of *Dapp Dexterity, a professional organization of world-class developers and
              marketing managers that deliver rock-solid products in the field of DeFi and NFTs.<br /><br />
              As of recently, he became interested in metaverse land investments.
            </Typography>
          </Grid>
          <Grid container item md={5} direction="column" data-aos="fade-left" style={{ marginTop: "100px" }}>
            <Grid container item justifyContent="center" className={classes.welcomeImgSx}>
              <Image width={500} height={350} className={classes.apetoshiProfile} src={dappDexImage} loading="lazy" alt="welcome" />
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: 100 }}>
          <Grid container item md={5} direction="column" data-aos="fade-right">
            <Grid container item justifyContent="center" className={classes.welcomeImgSx}>
              <ReactPlayer url='genart.mp4' loop={true} playing={true} controls={false} muted={true} />
            </Grid>
          </Grid>
          <Grid container item md={7} direction="column" className={classes.welcomeTxt} data-aos="fade-left">
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

export default About;