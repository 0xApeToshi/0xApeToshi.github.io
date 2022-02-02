import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '1',
    imgPath:
      'banner/1.gif',
  },
  {
    label: '2',
    imgPath:
      'banner/2.gif',
  },
  {
    label: '3',
    imgPath:
      'banner/3.jpg',
  },
  {
    label: '4',
    imgPath:
      'banner/4.jpg',
  },
  {
    label: '5',
    imgPath:
      'banner/5.jpg',
  }
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} style={{ padding: 20 }}>
            <div style={{
              border: '10px solid white',
              borderRadius: 20,
              boxSizing: 'border-box',
              backgroundColor: 'white',
              boxShadow: '0px 0px 15px 6px #b79a16',
            }}>
              <Box
                component="img"
                sx={{
                  width: "100%",
                  display: 'block',
                  overflow: 'hidden',
                  borderRadius: 15,
                  height: "400px"
                }}
                src={step.imgPath}
                alt={step.label}
              />
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        style={{ justifyContent: "center" }}
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;