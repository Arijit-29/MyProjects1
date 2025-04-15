import styles from "./buttons.module.css"
function Buttons({onButtonClicked}){
    const chars=['C','1','2','+','3','4','-','5','6','×','7','8','/','9','0','=','.']
 
    return(
        <div className={styles.button_container}>
       {chars.map(buttonName=>
        <button onClick={()=>{
            const click=new Audio("/click.wav")
            click.play().catch(err=>(console.error("audio play failed:",err)))
    
            onButtonClicked(buttonName==='×'?'*':buttonName)
        }
        }
        
        key={buttonName}
        className={`${styles.button} ${buttonName === 'C' ? styles.red:''} ${buttonName === '=' ? styles.green:''}`}

    >{buttonName}</button>
       )}
        </div>
    )
}
export default Buttons