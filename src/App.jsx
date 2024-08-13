import Hero from "./component/Hero"
import HighLight from "./component/HighLight"
import Model from "./component/Model"
import Navbar from "./component/Navbar"

const App = () => {
  return (
    <main className="bg-black-500">
    < Navbar />
    < Hero />
     <HighLight />
     <Model/>
    </main>
  )
}

export default App