import PostListContainer from '../components/Blog/PostListContainer';

import Layout from "components/layout/Layout";

const Index = () => {
  return (
    <Layout
      title="Ape Toshi"
      description="Ape Toshi"
    >
      <PostListContainer />
    </Layout>
  );
};

export default Index;