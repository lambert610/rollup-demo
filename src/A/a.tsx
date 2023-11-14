import {add} from './until'
import './a.less'
const TestCss = ()=>{
    return <div className={'con'}>2222</div>
}

const Add = ()=>{
    return <div>{TestCss()}{add(1,1)}</div>
}

export  default  Add


