import './btn.css'
import {useState} from 'react';
function State () {
    const  [Number,setNumber] = useState(0)
    //use useState to choose between arr number that can be relplace its value when interact
    const [arrOption,SetArrOption] = useState([1,2,3,4,5,6,7,8,9])
//it order to make use of a value in arroption we need the help of other useState to store a value for arroption
    const [optionValue,SetoptionValue] = useState(1)
    function onclickIncrease(){
        setNumber(Number+optionValue)
    }
    function onclickDecrease(){
        setNumber(Number-optionValue)
    }
//function onClickChangeOpt(number) is mean when we chose one arroption number list 
//it will automatically use it as a state of number ie. if select 5 number = 5 so if we click plus it add 5
    function onClickChangeOpt(number){
        console.log(number)
//SetoptionValue(number) is mean now the value of optionValue is changing depend on the number we select
        SetoptionValue(number)
    }
    return(

        <div className='body'>
           
            <div className='container'>
                <h4>Using State</h4>
                <div className='num-box'>
                    <p>{Number}</p>
                </div>
                <div className='num-container'>
            {/* arrOption.map use to list out the number in arrOption */}
                    {arrOption.map((item,index) => {
                        return(
         // onclick={()=>onClickChangeOpt(item)} is use to interact when you click the btn it'll go thru function with paramenter{item} 
         //it also show the value{item} of arropion when click on it
                            <div onClick={()=>onClickChangeOpt(item)} className={item == optionValue ? "num-select-active" : "num-select"}>
                                {item}
                                
                            </div>
                           
                        )
                    })}
                </div>
                <div className='btn-wrap'>
                    <button className='btn1' onClick={onclickIncrease}>+</button>
                    <button className='btn1' onClick={onclickDecrease}>-</button>

                </div>
                <p>Currently increase/decrease by  {optionValue}</p>
               

            </div>
          


        </div>
    );
}
export default State;