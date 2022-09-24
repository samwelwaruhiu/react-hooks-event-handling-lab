// Code Keypad Component Here

function Keypad (){
 
function response(){
    console.log("Entering password...")
}

    return (
        <div>
            <input type = "password" onChange ={response}></input>
        </div>
    )
}

export default Keypad;