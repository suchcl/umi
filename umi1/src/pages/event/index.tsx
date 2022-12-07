import React, { useState } from "react";


const Index = () => {
  let [age,setAge] = useState(14);
  let [userName,setUserName] = useState("Nicholas Zakas23");

  return (
    <div>
      <p>{age}</p>
      <Child age={age} name={userName}/>
      <button onClick={() => setAge(age+1)}>来吧</button>
    </div>
  );
}

export default Index;


interface IProps{
  age: number,
  name: string,
  test?:any
}
const Child:React.FC<IProps> = (props) => {
  const {
    age,name
  } = props;
  return (
    <div>
      基本信息
      <p>年龄: {age}</p>
      <p>姓名: {name}</p>
    </div>
  )
}