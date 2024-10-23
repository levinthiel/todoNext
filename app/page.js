"use client";
import Logo from "./Components/Logo";
import Main from "./Components/main";
import FooterBtns from "./Components/footer/footerbtns";
import  useLocalStorageState  from "use-local-storage-state";


export default function Home() {

  const [todos, setTodos] = useLocalStorageState("todos", {defaultValue: []});

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
  function saveAllTodos(){
    console.log("save")
  }

  return (
    <>
      <header >
        <Logo />
      </header>
      <Main  todos={todos} setTodos={setTodos} handleBin={handleBin} handleIsDone={handleIsDone}/>
      <footer >
        {/* <FooterBtns role={"Save list"} onClick={saveAllTodos}/> */}
        <FooterBtns role={"Clear list"} onClick={clearAllTodos}/>
      </footer>
    </>
  );
}
