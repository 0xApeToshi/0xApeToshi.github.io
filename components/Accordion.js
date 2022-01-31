import * as React from 'react';
import { Container, Grid } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  AccordionStyle: {
    paddingTop: "119px",
    marginBottom: "94px",
    justifyContent: "center",
    display: "flex",
    '@media (max-width:600px)': {
      paddingTop: "20px",
      marginBottom: "20px",
    }
  },
  AccorSpace: {
    marginBottom: "100px",
    '@media (max-width:600px)': {
      marginBottom: "0"
    },
  },
  AccordionTitle: {
    fontSize: '28px',
    fontWeight: '400',
    '@media (max-width:600px)': {
      fontSize: '20px',
    }
  },
  AccordionBody: {
    fontSize: '20px',
    fontWeight: '400',
    '@media (max-width:600px)': {
      fontSize: '16px',
    }
  },
}))

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();

  return (
    <Container id="faq" className={classes.AccordionStyle} data-aos="fade-up">
      <Grid container direction="column" lg="10">
        <Grid
          item
          container
          direction="column"
        >
          <Typography variant="h1" align="center" className={classes.AccorSpace}>FAQ</Typography>
        </Grid>
        <Grid item>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.AccordionTitle} sx={{ width: '33%', flexShrink: 0 }}>
                When is the mint?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.AccordionBody}>
                Late November 2021.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.AccordionTitle} sx={{ width: '33%', flexShrink: 0 }}>
                What’s the mint price?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.AccordionBody}>
                0.99 SOL
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.AccordionTitle} sx={{ width: '33%', flexShrink: 0 }}>
                Will there be any pre-sales?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.AccordionBody}>
                Yes, we’ll be holding a small exclusive pre-sale to help our community grow better. <br />
                All information related to it will be listed in our discord server so make sure you join us there!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className={classes.AccordionTitle} sx={{ width: '33%', flexShrink: 0 }}>
                Which wallet can I use to mint?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.AccordionBody}>
                We mainly love to use Phantom but you can use any solana based wallet
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography className={classes.AccordionTitle} sx={{ width: '33%', flexShrink: 0 }}>
                Will there be a marketplace to trade my NFTs in?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.AccordionBody}>
                Yes, of course! We'll be listing on multiple NFT marketplaces like Alpha.art, Solanart etc - acceptance times will vary but we'll keep you posted!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography className={classes.AccordionTitle} sx={{ width: '33%', flexShrink: 0 }}>
                Is there a limit as to how many I can mint?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.AccordionBody}>
                There won't be a limit apart from 1 academy student per transaction.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  );
}