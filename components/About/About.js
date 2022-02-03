import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from 'next/image'

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
    fontWeight: 400,
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
    <Grid id="about" container item>
      <Container>
        <Grid container alignItems="center" style={{ padding: 20, marginTop: 100 }}>
          <Grid container item md={5} direction="column" data-aos="fade-right">
            <Grid container item justifyContent="center" className={classes.welcomeImgSx}>
              <Image
                width="350"
                height="350"
                className={classes.apetoshiProfile}
                src="/apetoshi.png"
                alt="my image"
                loading="eager"
              />
            </Grid>
          </Grid>
          <Grid container item md={7} direction="column" className={classes.welcomeTxt} data-aos="fade-left">
            <Typography variant="h1" className={classes.welcomeTitle}>
              CyberKong #4674
            </Typography>
            <Typography variant="h3" className={classes.welcomeContent}>
              Ape Toshi is a Physics student with a passion for CS and a GitHub Arctic Code Vault contributor on his main GitHub account.<br /><br />
              Sometimes he'll dox himself, but he mostly prefers to keep his privacy.<br /><br />
              Every summer he volunteers as a mentor for STEM workshops meant for primary school and high school students. He got into crypto and NFTs in 2021 and realized his talent for <b>Solidity & web3</b>. <br /><br /> He became a successful smart contract developer which enabled him to transition to entrepreneurship; a venture he funds on his own.
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" style={{ padding: 20, marginTop: 50 }}>
          <Grid container item md={7} direction="column" className={classes.welcomeTxt1} data-aos="fade-right">
            <Typography variant="h1" className={classes.welcomeTitle}>
              Dapp Dexterity
            </Typography>
            <Typography variant="h3" className={classes.welcomeContent}>
              He is the founder of Dapp Dexterity, a professional organization of world-class developers and
              marketing managers that deliver rock-solid products in the field of DeFi and NFTs.<br /><br />
              As of recently, he became interested in metaverse land investments.
            </Typography>
          </Grid>
          <Grid container item md={5} direction="column" data-aos="fade-left" >
            <Grid container item justifyContent="center" className={classes.welcomeImgSx}>
              <Image
                width="500"
                height="280"
                className={classes.apetoshiProfile}
                src="/dapp-dexterity-banner.png"
                alt="my image"
                loading="eager"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default About;