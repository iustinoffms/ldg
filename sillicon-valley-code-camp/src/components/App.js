import Header from "./Header";
import Speakers from "./Speakers";
import Layout from "./Layout";

function App() {
  return (
    // The <Layout/> can be move into _app
    <Layout>
      {/* 
        The `children` of the <Layout/> can be moved
        in pages/index.js
       */}
      <div>
        <Header />
        <Speakers />
      </div>
    </Layout>
  );
}

export default App;
