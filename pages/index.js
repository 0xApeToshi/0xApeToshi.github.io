import Layout from "components/layout/Layout";
import { makeStyles } from "@material-ui/core/styles";
import Banner from "components/Banner";
import About from "components/About";
import Projects from "components/Projects";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

const Index = () => {
  const classes = useStyles();

  return (
    <Layout
      title="Ape Toshi"
      description="Ape Toshi's Personal Website"
    >
      <About />
      <Projects />
      <Banner />
      <Typography variant="h1" style={{ fontWeight: 400 }} align="center">
        <br></br>Don't be a stranger, say hi!
      </Typography>

    </Layout>
  );
};

export default Index;