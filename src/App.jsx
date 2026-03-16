import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <section className='h-[100vh] w-[100vw]' style={{backgroundColor:color}} >
      <div className='flex w-full h-16 justify-center items-center fixed inset-x-0
       bottom-8 bg-pink-600 '>
        <div className='flex gap-56 bg-white w-full absolute h-10 rounded-2xl items-center'>
          <button className='mx-3 outline-none bg-red-600 text-white w-20 rounded-2xl h-8 px-5'
          onClick={()=>setColor("red")}>
            red
          </button>
          <button className='mx-3 outline-none bg-green-700 text-white w-20 rounded-2xl h-8 px-5'
          onClick={()=>{setColor("green")}}>
            green
          </button>
          <button className='mx-3 outline-none bg-yellow-600 text-yellow w-20 rounded-2xl h-8 px-5'
          onClick={()=>{setColor("yellow")}}>
            yellow
          </button>
          <button className='mx-3 outline-none bg-pink-600 text-pink w-20 rounded-2xl h-8 px-5'
          onClick={()=>{setColor("pink")}}>
            pink
          </button>
          <button className='mx-3 outline-none bg-orange-600 text-white w-20 rounded-2xl h-8 px-5'
          onClick={()=>{setColor("orange")}}>
            orange
          </button>

        </div>

      </div>
    </section>
    </>
  )
}

export default App
