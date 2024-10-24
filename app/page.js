"use client";
import Main from "./Components/main";
import FooterBtns from "./Components/footer/footerbtns";
import  useLocalStorageState  from "use-local-storage-state";
import SavingModal from "./Components/modal"; 
import { useState } from "react";


export default function Home() {

  const [todos, setTodos] = useLocalStorageState("todos", {defaultValue: []});
  const [todosList, setTodoList] = useLocalStorageState("todosLists", {defaultValue: []});
  const [isModalOpen, setModalOpen] = useState(false);

  function handleBin(id) {
      setTodos(todos.filter((todo) => todo.id !== id));
  }
  function handleIsDone(id) {
      setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
          )
      );
  }


  function clearAllTodos(){
    setTodos([])
    console.log(todos)
  }
  function openSaveModal(){
    console.log("save")
    setModalOpen(true);
  }
  function saveList(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newList = { name:data.name, todos: [todos]}
    console.log(newList)
    setModalOpen(false);
    setTodoList([...todosList, newList])
    console.log("todosList",todosList)
  }

  return (
    <>

      <Main  todos={todos} setTodos={setTodos} handleBin={handleBin} handleIsDone={handleIsDone} todosList={todosList}/>

      {isModalOpen && (
        <SavingModal setModalOpen={setModalOpen} saveList={saveList}></SavingModal>
      )}
      <footer >
        <FooterBtns role={"Save list"} onClick={openSaveModal}/>
        <FooterBtns role={"My lists"} link="/mylists"/>
        <FooterBtns role={"Clear list"} onClick={clearAllTodos}/>
      </footer>
    </>
  );
}
