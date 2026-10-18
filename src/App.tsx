import { Footer } from "./components/layout/Footer"
import { NavBar } from "./components/layout/NavBar"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Technologies } from "./components/sections/Technologies"

function App() {
  return (
    <div className="flex min-h-screen flex-col"> 
      <NavBar />
      <main className="flex-1">
        <Hero />
        <About />
        <Technologies />
      </main>
      <Footer />
    </div>
  )
}


export default App
