import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicTabs from './components/Tabs'
import CustomizedList from './components/Lists'

function App() {
  return (
    <>
      <h1>Operations Portal</h1>
      <div><CustomizedList></CustomizedList></div>
      <div><BasicTabs></BasicTabs></div>
    </>
  )
}

export default App
