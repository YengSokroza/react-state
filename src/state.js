import './btn.css'
import {useState} from 'react';
function State () {
    const [x,setX] = useState(0);
    const [y,setY] = useState(1);
    const [name,setName] = useState('rady')
    const [arrname,setArrname] = useState(['rady','dy','ra'])
    const [arrInfo,setInfo] = useState([{name:'rady', age: 22, job: 'doctor'}])

    function onclickIncrease(){
        setX(9)
        setY(10)
        var sum = x + y
        console.log(sum)
        setName(['roza'])
        setInfo([{name: 'cool',age: 33 , job: 'doctor2'}])
    }
    return(

        <div>
            <h1>x = {x}</h1>
            <h1>y = {y} </h1>
            <h1>my name is {name}</h1>
            {arrname.map((item,index) => {
                return (
                    <div>
                        <h1>{item}</h1>
                    </div>
                )
                }
            ) 
            }
           
            {arrInfo.map((info,index) => {
                    return(
                        <div>
                            <h1>{info.name}</h1>
                            <h1>{info.age}</h1>
                        </div>
                    )
                    }

            )}

            <button onClick={onclickIncrease}>+</button>


            
            

        </div>
    );
}
export default State;