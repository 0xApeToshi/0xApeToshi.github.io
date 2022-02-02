import { Link } from 'react-scroll';
import { useRouter } from "next/router";
import React, { useState } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Grid,
  AppBar,
  Box,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  IconButton,
  Container,
  Link as Linking
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faDiscord, faTwitter);

import MenuIcon from "@material-ui/icons/Menu";
import { routes } from "data/routes";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: `3em`,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  logo: {
    color: theme.palette.secondary.main,
    width: "max-content",
    fontSize: "1.5rem",
  },
  drawerIconContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: `50px`,
    width: `50px`,
    color: `#fff`,
    [theme.breakpoints.down("xs")]: {
      height: `40px`,
      width: `40px`,
    },
  },
  drawer: {
    backgroundColor: theme.palette.secondary.main,
    padding: "0 6em",
  },
  link: {
    fontFamily: "'Poppins', 'Regular'",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  btn: {
    background: '#E4E4E4',
    color: 'black',
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      background: '#95BDCA',
    },
    padding: 0,
    '@media (max-width:960px)': {
      display: 'none'
    }
  },
  socialMedia: {
    marginRight: "20px"
  }
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDrawer, setOpenDrawer] = useState(false);

  const router = useRouter();

  const path = routes;

  const tabs = (
    <>
      <Grid container justifyContent="flex-start" spacing={4}>
        {path.map(({ name, link }) => (
          <Grid item key={link}>
            {link == 'blog' ? (
              <Linking href="/blog" style={{ textDecoration: "none" }}>
                <Typography
                  className={classes.link}
                  variant="h3"
                  style={{
                    fontWeight: router.pathname === link && "bold",
                    borderBottom: router.pathname === link && "1px solid #757ce8",
                  }}
                >
                  <Box>{name}</Box>
                </Typography>
              </Linking>
            ) : (
              <Link href="" style={{ textDecoration: "none" }} to={link} duration={2000} spy={true} smooth={true}>
                <Typography
                  className={classes.link}
                  variant="h3"
                  style={{
                    fontWeight: router.pathname === link && "bold",
                    borderBottom: router.pathname === link && "1px solid #757ce8",
                  }}
                >
                  <Box>{name}</Box>
                </Typography>
              </Link>
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );
  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
        anchor="left"
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {path.map(({ name, link }) => (
            <ListItem
              key={link}
              divider
              button
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              <ListItemText disableTypography>
                <Link href="" style={{ textDecoration: "none" }} to={link} duration={2000} spy={true} smooth={true}>
                  <Typography
                    style={{
                      color:
                        router.pathname === link
                          ? "primary"
                          : "rgb(107 107 107)",
                      fontWeight: "400",
                    }}
                  >
                    {name}
                  </Typography>
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar id="home" position="absolute">
          <Toolbar
            disableGutters
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              width: "100%",
              paddingTop: matches ? "0 16px" : "30px",
              paddingBottom: matches ? "0 16px" : "30px",
            }}
          >
            <Container>
              <Grid item container>
                <Grid item container alignItems="center" justifyContent="space-between" md={10} sm={9} xs={6}>
                  <Box mr={4} display={{ xs: "none", sm: "block", md: "block" }}>
                    <Linking href="/">
                      <img src="vx.jpg" width={40} />
                    </Linking>
                  </Box>
                  <Box>
                    {matches ? drawer : tabs}
                  </Box>
                </Grid>
                <Grid item container md={2} sm={3} xs={6}>
                  <Grid container item alignItems="center" justifyContent="flex-end">
                    <Linking href="https://discord.gg/uPEbUpBV">
                      <FontAwesomeIcon className={classes.socialMedia} color="white" icon={['fab', 'discord']} />
                    </Linking>
                    <Linking href="https://twitter.com/0xApeToshi">
                      <FontAwesomeIcon className={classes.socialMedia} color="white" icon={['fab', 'twitter']} />
                    </Linking>
                    <Linking href="https://github.com/0xApeToshi">
                      <FontAwesomeIcon className={classes.socialMedia} color="white" icon={['fab', 'github']} />
                    </Linking>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};
export default Header;
