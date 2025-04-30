import Name from './components/Name.jsx'
import Display from './components/display.jsx'
import Buttons from './components/buttons.jsx'
import './App.css'
import { useState } from 'react'
import { create, all } from 'mathjs'
const math = create(all)
math.config({ number: 'BigNumber', precision: 20 })
function App() {
    let [calVal,setcalVal]=useState("")
    const onButtonClicked=(buttonText)=>{
      if(buttonText==='C'){
         setcalVal("")
      }
    else  if(buttonText==='='){
           try{
           const result=math.evaluate(calVal.replace(/×/g, '*')
           .replace(/\b0+(?=\d)(?!\.)/g, '') 
           .replace(/\*{2,}/g, '*')
           .replace(/([+\-*/]){2,}/g, '$1'))
           if (math.typeOf(result) === 'BigNumber') {
            if (!result.isFinite() || result.isNaN()) {
            setcalVal("math error")
          } else
           setcalVal(result.toString())
      }}
      catch (err) {
        setcalVal("math error")
        console.error("Evaluation error:", err)
      }
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
