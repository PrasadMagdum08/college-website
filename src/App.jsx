import Header from './components/Header'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Welcome from './components/Welcome'
import NewsEvents from './components/NewsEvents'
import QuickLinks from './components/QuickLinks'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Hero />
      <About />
      <Welcome />
      <NewsEvents />
      <QuickLinks />
      <Footer />
    </div>
  )
}

export default App
