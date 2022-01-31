import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Icon } from '@iconify/react';
// if you wanto to add twitter
// import TwitterIcon from '@material-ui/icons/Twitter';

import { socialMedia } from "data/socialMedia";

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "62px",
    height: "62px",
    color: "white",
    marginRight: "42px",
    [theme.breakpoints.down("xs")]: {
      width: "42px",
      height: "42px",
      color: "white",
      marginRight: "22px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
}));

const Social = ({ color }) => {
  const classes = useStyles();
  const { instagram, twitter, discord } = socialMedia;

  return (
    <Grid item style={{ marginLeft: "3.75em" }}>
      {/* <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={instagram}
      >
        <InstagramIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid> */}
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={discord}
      >
        <Icon icon="mdi:discord" className={classes.snsIcon} />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={twitter}
      >
        <TwitterIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      {/* add social media*/}
    </Grid>
  );
};

export default Social;
