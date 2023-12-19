import "./App.css";

import { Header } from "./components/reactcomponents";
import { MainContent } from "./components/reactcomponents";
import { ProductSection } from "./components/reactcomponents";
import { FAQ } from "./components/reactcomponents";
import { Footer } from "./components/reactcomponents";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
