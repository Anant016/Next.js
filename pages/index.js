import Layout from "../components/Layout";
import Prices from "../components/Prices";

import Fetch from "isomorphic-unfetch";

const Index = (props) => (
  <Layout>
    <div>
      <h1>Hello Next.js</h1>
      <p>Check current bitcoin rate</p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();
  console.log(data);
  return {
    bpi: data,
  };
};

export default Index;
