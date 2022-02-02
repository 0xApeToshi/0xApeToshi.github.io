import PostListContainer from '../components/Blog/PostListContainer';

import Layout from "components/layout/Layout";

const Index = () => {
  return (
    <Layout
      title="Apetoshi"
      description="Apetoshi"
    >
      <PostListContainer />
    </Layout>
  );
};

export default Index;