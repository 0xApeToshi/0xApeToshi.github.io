import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Container, Grid, Typography, LinearProgress, Button, Box } from "@material-ui/core";
import Countdown from "react-countdown";

const defaultStyles = {
  clockStyle: {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    letterSpacing: '5px',
  },
  clockHeaderStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clockItemStyle: {
    fontSize: 47,
    fontWeight: 400,
  },
  clockSepStyle: {
    fontSize: 47,
    fontWeight: 0,
    marginLeft: 5,
    marginRight: 5,
  },
  clockSubStyle: {
    fontSize: 20,
    fontWeight: 400,
    marginTop: 13,
    letterSpacing: 0
  },
  seperator: {
    marginBottom: '10px',
    fontSize: '18px',
    letterSpacing: 'initial',
    color: 'transparent',
  },
  digit: {
    width: 130,
  }
};

class ReactClock extends Component {
  static propTypes = {
    startDate: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    completed: PropTypes.func
  };

  static Seperator = ({ clockSeparator, shouldShow = true }) => {
    return <div  style={{ ...defaultStyles.clockSepStyle }}>
      <span>{shouldShow ? (clockSeparator ? clockSeparator : '|') : ''}</span>
      <div style={{ ...defaultStyles.seperator }}>sp</div>
    </div>;
  }

  render() {
    const { startDate, text1, text2, complete } = this.props;

    const renderCounter = ({ days, hours, minutes, seconds, completed }) => {
      return (
        <>
          <div
            style={{
              ...defaultStyles.clockStyle,
            }}>
              <Typography style={{ ...defaultStyles.clockItemStyle }}>{days}</Typography>
              <Typography style={{ ...defaultStyles.clockSubStyle }}>Days</Typography>
              <Typography style={{ ...defaultStyles.clockSepStyle }}>|</Typography>
              <Typography style={{ ...defaultStyles.clockItemStyle }}>{hours}</Typography>
              <Typography style={{ ...defaultStyles.clockSubStyle }}>Hrs</Typography>
              <Typography style={{ ...defaultStyles.clockSepStyle }}>|</Typography>
              <Typography style={{ ...defaultStyles.clockItemStyle }}>{minutes}</Typography>
              <Typography style={{ ...defaultStyles.clockSubStyle }}>Min</Typography>
              <Typography style={{ ...defaultStyles.clockSepStyle }}>|</Typography>
              <Typography style={{ ...defaultStyles.clockItemStyle }}>{seconds}</Typography>
              <Typography style={{ ...defaultStyles.clockSubStyle }}>Sec</Typography>
            {/* <ReactClock.Seperator />
              <div style={{ ...defaultStyles.clockItemStyle }}>{hours}</div>
              <div className="clockSubHeader"> Hours </div>
            <ReactClock.Seperator />
              <div style={{ ...defaultStyles.clockItemStyle }}>{minutes}</div>
              <div className="clockSubHeader"> Minutes </div>
            <ReactClock.Seperator />
              <div style={{ ...defaultStyles.clockItemStyle }}>{seconds}</div>
              <div className="clockSubHeader"> Seconds </div> */}
          </div>
        </>
      );
    };

    return (
      <>
        <Box sx={{ position: 'relative' }}>
          <Countdown
            date={startDate}
            // onMount={({ completed }) => completed && complete()}
            // onComplete={() => complete()}
            renderer={renderCounter}
          />
        </Box>
      </>
    );
  }
}

export default ReactClock;