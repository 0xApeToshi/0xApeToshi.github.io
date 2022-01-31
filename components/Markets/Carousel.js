import * as React from 'react';
import { Container, Grid } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { makeStyles } from "@material-ui/core/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  teamCard: {
    maxWidth: '332px',
    borderRadius: 10,
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "26px 0"
  },
}));

const imageData = [
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

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = imageData.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const classes = useStyles();

  return (
    <Box sx={{ maxWidth: 332, flexGrow: 1, FlexFlow: 'column', }}>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {imageData.map((item, index) => (
          <Grid key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid container item className={classes.teamCard}>
                <img src={`${item.img}`} />
                <Typography variant="subtitle1">{`${item.name}`}</Typography>
                <Typography variant="h3" style={{ color: '#ababab', marginBottom: 10 }}>{`${item.role}`}</Typography>
                <a target="_blank" href={item.link} style={{ textDecoration: "none" }}>
                  <Typography variant="h3" style={{ display: "flex", alignItems: "center", color: "#e4e4e4" }}>
                    {`${item.address}`}
                    <img src="Vector.png" style={{ marginLeft: 10 }} />
                  </Typography>
                </a>
              </Grid>
            ) : null}
          </Grid>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        style={{ justifyContent: 'center' }}
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;