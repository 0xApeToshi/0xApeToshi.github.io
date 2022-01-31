import Layout from "components/layout/Layout";
import { makeStyles } from "@material-ui/core/styles";
import Banner from "components/Banner";
import About from "components/About";
import Markets from "components/Markets";

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
      {/* <Markets /> */}
    </Layout>
  );
};

export default Index;