import Hero from "./component/Hero"
import HighLight from "./component/HighLight"
import Navbar from "./component/Navbar"

const App = () => {
  return (
    <main className="bg-black-500">
    < Navbar />
    < Hero />
     <HighLight />
    </main>
  )
}

export default App