import { Container, Grid, Typography } from '@material-ui/core';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  timelineSpace: {
    marginTop: "120px",
    marginBottom: "165px",
    backgroundImage: "url('RoadBg.png')",
    backgroundRepeat: "no-repeat",
    '@media (max-width:600px)': {
      marginTop: "20px",
      marginBottom: "25px",
    },
  },
  fontSpace: {
    marginBottom: "100px",
    '@media (max-width:600px)': {
      marginBottom: "20px",
    }
  }
}))

const TimeLine = () => {
  const classes = useStyles();

  return (
    <>
      <Container id="roadmap" className={classes.timelineSpace}>
        <Grid container item alignItems="center" direction="column">
          <Typography variant="h1" align="center" className={classes.fontSpace}>
            Roadmap
          </Typography>
        </Grid>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243, 0)', color: '#fff', border: '2px solid #FFF', borderRadius: '20px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: '#111111', color: '#fff' }}
            icon={<img src="point.png" style={{ top: '30%', left: '50%', position: 'absolute', transform: 'translateX(-50%)' }} />}
          >
            <div className="vertical-timeline-element-title">Phase 1</div>
            <Typography variant="h4" style={{ wordWrap: "break-word" }}>
              Launch the official The Drunken Academy website and socials: <br />
              <ul>
                <li>Website: <a href="https://drunkenacademy.com">https://drunkenacademy.com</a></li>
                <li>Twitter: <a href="https://twitter.com/ADrunkenAcademy">https://twitter.com/ADrunkenAcademy</a></li>
                <li>Discord: <a href="https://discord.gg/DBgVSFTJ9m">https://discord.gg/DBgVSFTJ9m</a></li>
              </ul>
              Launch our initial marketing push including but not limited to: <br />
              <ul>
                <li>Paid advertising/promotions.</li>
                <li>Social media giveaways.</li>
              </ul>
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243, 0)', color: '#fff', border: '2px solid #FFF', borderRadius: '20px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: '#111111', color: '#fff' }}
            icon={<img src="point.png" style={{ top: '30%', left: '50%', position: 'absolute', transform: 'translateX(-50%)' }} />}
          >
            <div className="vertical-timeline-element-title">Phase 2</div>
            <Typography variant="h4" style={{ wordWrap: "break-word" }}>
              Launch day! <br />
              <ul>
                <li>5,555 academy students up for minting.</li>
                <li>Whitelisted presale minting 1-2 hrs prior to launch day.</li>
              </ul>

              Secondary marketplace listings (pending approval): <br />
              <ul>
                <li>Alpha.art</li>
                <li>Solanart</li>
                <li>Magic Eden</li>
              </ul>

              Release our complete rarity list soon after launch <br />

              Apply for rarity.tools listing soon after launch <br />
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243, 0)', color: '#fff', border: '2px solid #FFF', borderRadius: '20px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: '#111111', color: '#fff' }}
            icon={<img src="point.png" style={{ top: '30%', left: '50%', position: 'absolute', transform: 'translateX(-50%)' }} />}
          >
            <div className="vertical-timeline-element-title">Phase 3</div>
            <Typography variant="h4" style={{ wordWrap: "break-word" }}>
              Giving back to the community: <br />
              <ul>
                <li>Floor sweeps every 48 hrs for an indefinite amount of time.</li>
                <li>Huge cash giveaways worth 20k$ for starters, in our discord (your academy student NFT will act as a ticket in order to be eligible for all of the giveaways).</li>
              </ul>
              Donations to people in need: <br />
              <ul>
                <li>We've been helping people in need throughout our life so we'd love to do it on a larger scale.</li>
                <li>We'll hold a poll so our community decides where we should donate the funds, it could be anything from a single family in dire need of support to a big charitable fund setup for whole communities.</li>
              </ul>
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243, 0)', color: '#fff', border: '2px solid #FFF', borderRadius: '20px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: '#111111', color: '#fff' }}
            icon={<img src="point.png" style={{ top: '30%', left: '50%', position: 'absolute', transform: 'translateX(-50%)' }} />}
          >
            <div className="vertical-timeline-element-title">Phase 4</div>
            <Typography variant="h4" style={{ wordWrap: "break-word" }}>
              500 female students will be enrolling into the academy 3 weeks after public mint: <br />
              <ul>
                <li>They'll be airdropped to people who are still holding our NFTs in their wallets.</li>
              </ul>
              We'll be introducing NFT Fusions: <br />
              <ul>
                <li>Think of it as an expansion to your existing NFT, want a new trait? Fuse it!</li>
                <li>More information about this will be available through our discord.</li>
              </ul>
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243, 0)', color: '#fff', border: '2px solid #FFF', borderRadius: '20px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: '#111111', color: '#fff' }}
            icon={<img src="point.png" style={{ top: '30%', left: '50%', position: 'absolute', transform: 'translateX(-50%)' }} />}
          >
            <div className="vertical-timeline-element-title">Phase 5</div>
            <Typography variant="h4" style={{ wordWrap: "break-word" }}>
              Open an actual school: <br />
              <ul>
                <li>Yup you heard it right. We’ll be opening an actual school that focuses on strengthening the foundations of not just education, but life of the future generation.</li>
                <li>More information about this will be shared in a whitepaper as soon as we finalize the deal with our contacts.</li>
              </ul>
            </Typography>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </>
  );
}

export default TimeLine;