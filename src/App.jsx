import Catalog from "../Components/Catalog";
import Navbar from "../Components/Navbar";
import ClicksDemo from "../Components/demo/ClickDemo";
import StateDemo from "../Components/demo/StateDemo";
function App() {
  return <>
    <header>
      <Navbar /> 
      <h1>Tal Eccommerce</h1>
    </header>
    <main>
      {/* <Catalog /> */}
      {/* <ClicksDemo /> */}
      <StateDemo />
    </main>
    <footer>
      <p>
        all rights reserved to me
      </p>
    </footer>
  </>;
}

export default App