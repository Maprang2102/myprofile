import { useState } from 'react'

// import reactLogo from "./assets/react.svg";
import viteLogo from "../../public/vite.svg";
import reactLogo from "../assets/react.svg"
import "../App.css";
import { Button, Input, Space } from "antd";
function Home() {
    const [count, setCount] = useState(0);
  return (
    <>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        <h1>Vite + React</h1>
        <div className="card">
          <Button type='primary' onClick={() => setCount((count) => count + 1)} danger>
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
    </div>
    </>
  )
}

export default Home