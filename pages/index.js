import Layout from "components/layout/Layout";
import { makeStyles } from "@material-ui/core/styles";
import Banner from "components/Banner";
import About from "components/About";
import Projects from "components/Projects";

const useStyles = makeStyles((theme) => ({

}));

const Index = () => {
  const classes = useStyles();

  return (
    <Layout
      title="Apetoshi"
      description="Apetoshi"
    >
      <Banner />
      <About />
      <Projects />
    </Layout>
  );
};

export default Index;