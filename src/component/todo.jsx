import React, { createRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import { fire , db } from "../fire";

function Todoo() {

  const history = useHistory();
  const valueInput = createRef();
    

  let data = [];
  const [todoList ,setTodoList]= useState([])

  const addTodo = (e) => {
    e.preventDefault();
    const input = valueInput.current.value;

    if(input !== "" ){
      db.collection("Todo").doc(input).set({
          todoValue:input,
          isCheck:false
      })
    //   setTimeout( () => {
    //       window.location.href="/pay";
    //   },2000)
    }else{
      alert(" Vous n'avez pas remplis les champs ");
    }

  }

  const deleteTodo = (ev,id) =>{
    db.collection("Todo").doc(id).delete().then(()=>{
      alert("Objet est bien supprimé ! ")
    //   window.location.href="/pay";
    })
  }

  const fetchPay = () => {
    db.collection("Todo").get().then(querySnapshot =>{
        querySnapshot.forEach(doc => {
          data.push(doc.data())
          console.log(doc.id, " => ", doc.data());
        });
        setTodoList(data);
    })
  }


  const isChecked = (input) => {
    const checkboxValue = document.querySelector(".checkbox");
    console.log("checkboxValue : ",checkboxValue.checked)

    db.collection("Todo").doc(input).set({
      todoValue:input,
      isCheck:checkboxValue.checked
    })
  }

  useEffect(()=>{
    fetchPay();
  },[])

    return (
      <>
        <div className="todoo_form">
            <input type="text" placeholder="Nouvelle tâches ?" ref={valueInput} required/>
            <button onClick={(e) => addTodo(e)}>Ajouter</button>
                {todoList.map((item,index) =>(
                    <ul className="todoo_list" key={ index }>
                        <li className="">
                            {item.todoValue}
                            <div>
                                <input type="checkbox"  className="checkbox" onChange={() => isChecked(item.todoValue)}/>
                                <button onClick={(ev) => deleteTodo(ev,item.todoValue) }>X</button>
                            </div>
                        </li>
                    </ul>
                ))}
        </div>
      </>
    );
  }
  
  export default Todoo;