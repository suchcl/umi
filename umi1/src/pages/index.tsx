import styles from './index.less';
import Nav from "../components/nav";
import {Button} from "antd";
import axios from "axios";
import { useState } from 'react';

export default function IndexPage() {
  const [id,setId] = useState(2);
  const [user,setUser] = useState([]);
  const getUser = (event:any) => {    
    if(id === 1){
      setId(2);
    }else{
      setId(1);
    }
    
    axios.get('http://localhost:3000/', {
      params: {
        id: id
      }
    })
    .then(function (res) {
      console.log(res);
    });  
  }



  function pluck<T, K extends keyof T>(o:T,names: K[]):T[K][]{
    return names.map(n => o[n]);
  }

  interface Person{
    name: string,
    age: number
  }
  let per:Person = {
    name: "Nicholas",
    age: 16
  };
  let strings:string[] = pluck(per,['name']);
  

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Nav />
      <div className="http">
        <Button type='primary' onClick={(event) => getUser(event)}>{id}</Button>
        <br />
        <Button type='primary' onClick={() => {getPerson(per)}}>提取类型</Button>
      </div>
      <div className="user-center">
        <a href="/user">大个人中心</a>
        <br />
        <div className="text">
          <h4>再来一个</h4>
          <p className='t1'>我国警告见效了？当立外长的面，澳外长向华示好：坚持一中原则</p>
          <p className='t2'>杜月笙虽是青帮老大，却有一个闻名于世的儿子，一生为祖国奋斗</p>
          <p className='t3'>百万订单“考验”父子情，冰墩墩工厂老板：儿子哭着要，莫法</p>
        </div>
      </div>
    </div>
  );
}
