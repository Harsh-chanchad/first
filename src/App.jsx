import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HeroBanner from './Components/HeroBanner.jsx'  
import setting from './settings.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HeroBanner />
      {count} */}

      <div>

        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>

        <HeroBanner banner={setting.HeroBanner} />
      </div>
    </>
  )

}

export default App
