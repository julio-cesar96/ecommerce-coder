import { useRef, useEffect } from "react";

import "./App.css";


function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }, []);

  return (
   <div>
      <h2> useRef para Manipular a DOM</h2>
      <input ref={inputRef} type="text" placeholder="Digete alguma coisa..." />
   </div>
  )
}

export default App;
