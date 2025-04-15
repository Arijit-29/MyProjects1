import styles from "./display.module.css"
function Display({calVal}){
  return(<input className={styles.display} type='text' value={calVal.replace(/\*/g, '×')}  readOnly>
  </input>)
}
export default Display