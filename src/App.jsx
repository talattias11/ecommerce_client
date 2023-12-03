import Catalog  from "../Components/Catalog";
import Navbar from "../Components/NavBar";

function App(){
  return <>
  <header>
  <Navbar /> 
    <h1>Tal Eccommerce</h1>
  </header>
  <main>
  <Catalog />
  </main>
  <footer>
    <p>all rights reserved</p>
  </footer>
  </>
  
}

export default App;