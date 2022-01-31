import { Container, Grid, Typography, LinearProgress, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  listSpace: {
    paddingTop: '90px',
    paddingBottom: '90px',
    backgroundImage: "url('MarketBg.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    '@media (max-width:960px)': {
      display: 'none',
      paddingTop: '20px',
      paddingBottom: '20px',
    }
  },
  titleSpa: {
    marginTop: 119,
    marginBottom: 104
  },
  maketImg1: {
    marginLeft: -575,
    '@media (max-width:1168px)': {
      marginLeft: -460,
      maxHeight: 180
    },
    '@media (max-width:1050px)': {
      marginLeft: -386,
      maxHeight: 150
    }
  },
  maketImg2: {
    marginLeft: 575,
    '@media (max-width:1168px)': {
      marginLeft: 460,
      maxHeight: 180
    },
    '@media (max-width:1050px)': {
      marginLeft: 386,
      maxHeight: 150
    }
  },
}));

const itemData = [
  {
    img: 'market1.png',
    title: 'Breakfast',
    cols: 2,
  },
  {
    img: 'market2.png',
    title: 'Breakfast',
  },
  {
    img: 'market3.png',
    title: 'Breakfast',
  },
  {
    img: 'market4.png',
    title: 'Breakfast',
    cols: 2,
  },
];

const Market = () => {
  const classes = useStyles();

  return (
    <Grid id="market" className={classes.listSpace}>
      <Grid container item md={12} direction="column" data-aos="fade-up">
        <Typography align="center" className={classes.titleSpa} variant="h1">Market Place</Typography>
      </Grid>
      <Grid container item>
        <Container>
          <Grid container item justifyContent="center" data-aos="fade-right">
            <img src="market5.png" className={classes.maketImg1}/>
            {/* <img src="market1.png" className={classes.maketImg}/>
          <img src="market2.png" className={classes.maketImg} style={{marginLeft: '20px', }} /> */}
          </Grid>
          <Grid container item justifyContent="center" style={{ marginTop: 20 }} data-aos="fade-left">
            <img src="market5.png" className={classes.maketImg2}/>

            {/* <img src="market3.png" className={classes.maketImg}/>
          <img src="market4.png" className={classes.maketImg} style={{marginLeft: '20px', }} /> */}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Market;