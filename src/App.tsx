import './App.css'
import ThemeProvider from './components/ThemeProvider'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}

export default App
