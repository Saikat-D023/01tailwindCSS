import './App.css'
import { Button } from './components/Buttons'
import { Otp } from './components/Otp'

function App() {

  return (
    <>
    {/* //excercise-1
   <div className='grid grid-cols-12'>
    <div className='col-span-12 sm:col-span-5 bg-red-300 '>
      hi
    </div>
    <div className='col-span-12 sm:col-span-5 bg-green-300 '>
      hi
    </div>
    <div className='col-span-12 sm:col-span-2 bg-blue-300 '>
      hi
    </div>
   </div> */}

   {/* excercise-2 */}
   {/* <div className='h-screen bg-blue-700'>
    <h1 className='py-300'>Verify Your Age</h1>
      <Button disabled={true}>Sign up</Button>
    </div> */}

    {/* //excercise-3 */}
    <div className='h-screen bg-blue-700'>
      <Otp />
    </div>
    </>
  )
}

export default App
