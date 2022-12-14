import React,{useState} from 'react'

export const ChildComp = ({ ClickP,val}) => {

    // const clickedFunc = (() => {
    //     const value = 5;
    //     clickeddd(value + 2);

    //     console.log("Passed data from child to parent!!");

    // })

    const [value, setvalue] = useState(0)

const clickedFunc=()=>{
    console.log(value);
    setvalue(5);
    ClickP(value+2);
}


    // const clickedFunc=(()=>{
    //     setvalue(6);
    //     Click(value+2);
    //     console.log("Value passed successfully!")
        
    // })


    return (
        <div>
            <h5>Passing data from Child to parent</h5>
            <h2>{value}</h2>

            <button onClick={clickedFunc}>Click</button>
        </div>
    )
}
