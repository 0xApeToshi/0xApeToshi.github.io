import { Container, Grid, Typography, LinearProgress, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as React from 'react';
import Carousel from "./Carousel";

const itemData1 = [
  {
    key: '1',
    img: 'Team/Team1.png',
    name: 'Maxhuh',
    role: '(Founder)',
    address: 'Twitter',
    link: 'https://twitter.com/MaxHuhh'
  },
  {
    key: '2',
    img: 'Team/Team2.png',
    name: 'Arcadian',
    role: '(Co-Founder)',
    address: 'Twitter',
    link: 'https://twitter.com/ArcadianPK'
  },
  {
    key: '3',
    img: 'Team/Team3.png',
    name: 'Holy',
    role: '(Marketing Manager)',
    address: 'Twitter',
    link: 'https://twitter.com/holywtd'
  },
];

const itemData2 = [
  {
    key: '4',
    img: 'Team/Team4.png',
    name: 'Zeeom',
    role: '(Project Manager)',
    address: 'Twitter',
    link: 'https://twitter.com/Zeeom77'
  },
  {
    key: '5',
    img: 'Team/Team5.png',
    name: 'Minato',
    role: '(Head Developer)',
    address: 'Minato | CTO#3775',
    link: 'https://discordapp.com/users/883873565936615464'
  },
  {
    key: '6',
    img: 'Team/Team6.png',
    name: 'Lara',
    role: '(Digital Artist)',
    address: 'Twitter',
    link: 'https://twitter.com/misskrabby'
  },
];

const useStyles = makeStyles((theme) => ({
  listSpace: {
    paddingTop: '83px',
    paddingBottom: '120px',
  },
  teamCard: {
    padding: "26px 0",
    width: 332,
    borderRadius: 10,
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  teamStyle: {
    justifyContent: 'center',
    display: 'flex',
    "&:last-child": {
      marginTop: 15
    },
    '@media (max-width:1075px)': {
      display: 'none',
    }
  },
  personalCard: {
    backgroundColor: 'red',
    marginLeft: '15px',
    marginRight: '15px',
    width: 332,
    borderRadius: 10,
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid white'
  },
  marketTitle: {
    marginBottom: 108
  },
  mobileStyle: {
    display: 'none',
    '@media (max-width:1075px)': {
      alignItems: 'center',
      justifyContent: "center",
      display: 'flex'
    },
  }
}));

const Team = () => {
  const classes = useStyles();

  return (
    <Container id="team" className={classes.listSpace}>
      <Grid container item md={12} direction="column" data-aos="fade-up">
        <Typography align="center" variant="h1" className={classes.marketTitle}>Our Team</Typography>
      </Grid>
      <Grid container className={classes.mobileStyle}>
        <Carousel />
      </Grid>
      <Grid container className={classes.teamStyle} data-aos="fade-right">
        {/* <ImageList sx={{ height: 984, width: 1200 }} cols={4} rowHeight={400}> */}
        {itemData1.map((item) => (
          `${item.key}` == 2 ?
            <Grid container item className={classes.personalCard}>
              <img src={`${item.img}`} />
              <Typography variant="subtitle1">{`${item.name}`}</Typography>
              <Typography variant="h3" style={{ color: '#ababab', marginBottom: 10 }}>{`${item.role}`}</Typography>
              <a target="_blank" href={item.link} style={{textDecoration: "none"}}>
                <Typography variant="h3" style={{ display: "flex", alignItems: "center", color: "#e4e4e4" }}>
                  {`${item.address}`}
                  <img src="Vector.png" style={{ marginLeft: 10 }} />
                </Typography>
              </a>
            </Grid>
            :
            <Grid container item className={classes.teamCard}>
              <img src={`${item.img}`} />
              <Typography variant="subtitle1">{`${item.name}`}</Typography>
              <Typography variant="h3" style={{ color: '#ababab', marginBottom: 10 }}>{`${item.role}`}</Typography>
              <a target="_blank" href={item.link} style={{textDecoration: "none"}}>
                <Typography variant="h3" style={{ display: "flex", alignItems: "center", color: "#e4e4e4" }}>
                  {`${item.address}`}
                  <img src="Vector.png" style={{ marginLeft: 10 }} />
                </Typography>
              </a>
            </Grid>
        ))}
      </Grid>
      <Grid container className={classes.teamStyle} data-aos="fade-left">
        {/* <ImageList sx={{ height: 984, width: 1200 }} cols={4} rowHeight={400}> */}
        {itemData2.map((item) => (
          `${item.key}` == 5 ? (
            <Grid container item className={classes.personalCard}>
              <img src={`${item.img}`} />
              <Typography variant="subtitle1">{`${item.name}`}</Typography>
              <Typography variant="h3" style={{ color: '#ababab', marginBottom: 10 }}>{`${item.role}`}</Typography>
              <a target="_blank" href={item.link} style={{textDecoration: "none"}}>
                <Typography variant="h3" style={{ display: "flex", alignItems: "center", color: "#e4e4e4" }}>
                  {`${item.address}`}
                  <img src="Vector.png" style={{ marginLeft: 10 }} />
                </Typography>
              </a>
            </Grid>
          ) : (
            <Grid container item className={classes.teamCard}>
              <img src={`${item.img}`} />
              <Typography variant="subtitle1">{`${item.name}`}</Typography>
              <Typography variant="h3" style={{ color: '#ababab', marginBottom: 10 }}>{`${item.role}`}</Typography>
              <a target="_blank" href={item.link} style={{textDecoration: "none"}}>
                <Typography variant="h3" style={{ display: "flex", alignItems: "center", color: "#e4e4e4" }}>
                  {`${item.address}`}
                  <img src="Vector.png" style={{ marginLeft: 10 }} />
                </Typography>
              </a>
            </Grid>
          )
        ))}
      </Grid>
    </Container>
  );
};

export default Team;