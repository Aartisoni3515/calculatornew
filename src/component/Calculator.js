import React,{useState} from 'react'
function Calculator() {
    const [result , setResult]= useState("");
  
  const clickHandler=(e)=>{
    setResult(result.concat(e.target.value));
  
  }
  const clearDisplay=()=>{
    setResult("");
  }
  
  // 
  const calculate=()=>{
    setResult(eval(result).toString());
  }
  
  
    return (
      <>
        <div className="calc">
          <input type="text" placeholder="0" id="answer" value={result} />
  
            <input type="button" className="buttons" value="9" onClick={clickHandler}   />
            <input type="button" className="buttons" value="8" onClick={clickHandler} />
            <input type="button" className="buttons" value="7" onClick={clickHandler}/>
            <input type="button" className="buttons" value="/" onClick={clickHandler} /> <br />
            <input type="button" className="buttons" value="6" onClick={clickHandler} />
            <input type="button" className="buttons" value="5" onClick={clickHandler}  />
            <input type="button" className="buttons" value="4" onClick={clickHandler} />
            <input type="button" className="buttons" value="*" onClick={clickHandler} /> <br />
            <input type="button" className="buttons" value="3" onClick={clickHandler} />
            <input type="button" className="buttons" value="2" onClick={clickHandler} />
            <input type="button" className="buttons" value="1" onClick={clickHandler} />
            <input type="button" className="buttons" value="-" onClick={clickHandler}/> <br />
            <input type="button" className="buttons" value="0" onClick={clickHandler}/>
            <input type="button" className="buttons" value="00" onClick={clickHandler} />
            <input type="button" className="buttons" value="." onClick={clickHandler} />
            <input type="button" className="buttons" value="+" onClick={clickHandler} /> <br />
            <input type="button" className="buttons" value="%" onClick={clickHandler}/>
            <input type="button" className="buttons" value="=" onClick={calculate}/>
            <input type="button" className="button_1" value="clear" onClick={clearDisplay} />
          
        </div>
      </>

  )
}

export default Calculator