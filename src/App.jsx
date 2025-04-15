import Name from './components/Name.jsx'
import Display from './components/display.jsx'
import Buttons from './components/buttons.jsx'
import './App.css'
import { useState } from 'react'
function App() {
    let [calVal,setcalVal]=useState("")
    const onButtonClicked=(buttonText)=>{
      if(buttonText==='C'){
         setcalVal("")
      }
    else  if(buttonText==='='){
           const result=eval(calVal.replace(/×/g, '*'))
           setcalVal(result.toString())
      }
      
      else{
        const newValue=calVal+ buttonText
        setcalVal(newValue)
      }
    }
  return(
    <div className='calculator'>
     <Name></Name>
      <Display calVal={calVal}></Display>
    
      <Buttons onButtonClicked={onButtonClicked}></Buttons>
    </div>
  )
}

export default App
