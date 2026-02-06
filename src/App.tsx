import { Route, Routes } from 'react-router'
import HomePage from './features/home/HomePage'

function App() {

  return (
    <body  className="bg-[#101922] font-display text-gray-100 antialiased transition-colors duration-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </body>
  )
}

export default App
