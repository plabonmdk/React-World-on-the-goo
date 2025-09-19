
import { Suspense } from 'react'
import './App.css'
import Countries from './componants/Countries'


const countriesPromise = fetch(`https://openapi.programming-hero.com/api/all`)
.then((res) => res.json())

function App() {
 

  return (
    <>

    <Suspense fallback={<p>plabon vai loading.....</p>}>
      <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
    </>
  )
}

export default App
