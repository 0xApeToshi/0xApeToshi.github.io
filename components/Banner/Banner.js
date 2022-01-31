import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableTextMobileStepper from "./Carousel";

const useStyles = makeStyles((theme) => ({

}));

const Banner = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Container maxWidth="lg">
        <Grid container item className={classes.contentBg}>
          <SwipeableTextMobileStepper />
        </Grid>
      </Container>
    </Grid>
  );
};

export default Banner;