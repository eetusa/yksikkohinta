import './App.css';
import TextField from './components/TextField';
import { parse_data } from './util/parser';
import React, { useState } from 'react'
import ResultField from './components/ResultField';

function App() {
    const [input, setInput] = useState("")
    const [unit_price_column_no, setUnit_price_column_no] = useState(4)
    const [discount_column_no, setDiscount_column_no] = useState(5)
    const [ignore_every_other, setIgnore] = useState(false)
    const [processed_data, setProcessedData] = useState([])

    const onChange = (e) => {
        setInput(e.target.value)
    }
    const handle_data = () => {
        let data = parse_data(input, unit_price_column_no-1, discount_column_no-1, ignore_every_other)
        setProcessedData(data)
    }



    return (
      <div className="App">
        <header className="App-header">
          <div className='Wrapper'>
              <div className='Left-side-top'>
                  <div className='Inputs'>
                      <div className='Input'>            
                          <label style={{padding: "5px"}}>Verottoman yksikköhinnan kolumnin numero</label>
                          <input type="text" value={unit_price_column_no} onChange={(e) => setUnit_price_column_no(e.target.value)}></input>
                      </div>
                      <div>            
                          <label style={{padding: "5px"}}>Alennuksen kolumnin numero</label>
                          <input type="text" value={discount_column_no} onChange={(e) => setDiscount_column_no(e.target.value)}></input>
                      </div>
                      <div>
                          <label style={{padding: "5px"}}>Jätä huomioimatta joka toinen rivi</label>
                          <input type="checkbox" checked={ignore_every_other} onChange={() => setIgnore(!ignore_every_other)}></input>
                      </div>
                  </div>
                  <div className='Right-side'>
                
                  </div>
              </div>
          </div>


          <div className='Wrapper'>
                
            <div className='Left-side'>
                <TextField input={input} onChange={onChange}></TextField>
                <button onClick={() => handle_data()}>Laske verottomat alennetut hinnat</button>
            </div>
              

              <div className='Right-side'>
                <ResultField data={processed_data}></ResultField>
              </div>

          </div>


        </header>
      </div>
    );
}

export default App;
