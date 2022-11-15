import Header from "./Header";
import SectionOrder from "./SectionOrder";
import SectionPromo from "./SectionPromo";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <SectionPromo />
        <SectionOrder />
      </main>
      <Footer />
    </>
  );
}

export default App;
