import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Panel from './components/Panel/Panel';
import Main from './containers/Main/Main';


const initialValue = {
  previous: 0,
  current: 0,
  result: 0,
  operator: null
}

function App() {
  const [value, setValue] = useState(initialValue)
  const [themeChange, setThemeChange] = useState("theme-dark")

  const calculation = (operator, preValue, currValue) => {
    const op = operator
    const pre = parseFloat(preValue)
    const curr = parseFloat(currValue)
    if (op === "+") return pre + curr
    if (op === "-") return pre - curr
    if (op === "/") return pre / curr
    if (op === "*") return pre * curr
  }

  const numberSelectHandler = (x) => {
    if (x === "del") {
      let curr = value.current.toString().slice(0, -1)
      let result = value.result.toString().slice(0, -1)
      if (result.length === 0) { curr = null; result = 0 }
      setValue({ ...value, current: curr, result: result })
      return

    }

    if (x === "reset") { setValue(initialValue); return }

    if (x === ".") {
      const dot = value.result.toString().indexOf(".")
      if (dot > -1) return
      let val = value.current ? `${value.current}${x}` : x
      if (val[0] === "0") val = val.replace(/^0+/, '')
      setValue({ ...value, current: val, result: val })
    }
    var regex = /^[0-9\.]+$/;
    if (x.match(regex)) {
      if(value?.current?.toString()?.length>=9)return

      let val = value.current ? `${value.current}${x}` : x
      if (val[0] === "0") val = val.replace(/^0+/, '')


      setValue({ ...value, current: val, result: val })

    } else {
      if (!value.current) { setValue({ ...value, operator: x }); return }
      if (value.previous === 0 || value.previous === NaN) {

        setValue({ ...value, previous: value.current, current: null, operator: x })
        return
      }
      let result = (x === "+" || x === "-" || x === "*" || x === "/" || x === "=") && calculation(value.operator, value.previous, value.current)

      if(result.toString().length>=9) {
        if(result.toString().indexOf(".")>-1){
          result= parseFloat(result).toFixed(3)
        }else{
          result ="+999999999"
        }
      }
      if (x == "=") { setValue({ ...value, previous: 0, current: null, operator: null, result: result }); return }
      setValue({ ...value, previous: result, current: null, result: result, operator: x })
    }

  }

  return (
    <>
      <Main>
        <div className='sm:w-[456px]'>
        <Header onChangeTheme={(x)=>setThemeChange(x)}/>
        <Input value={value.result} themeChange={themeChange} />
        <Panel onNumberClick={numberSelectHandler} />
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default App;
