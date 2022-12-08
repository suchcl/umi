import { useState } from "react";

const State = () => {
    const [name,setName] = useState("Nicholas Zakas");
    const changeName = () => {
        setName("我改了名字了");
    }
    return (
        <>
            <p>姓名: {name}</p>
            <div>state</div>
            <button onClick={changeName}>变名</button>
        </>
    )
}

export default State;