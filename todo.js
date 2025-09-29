import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]), [txt, setTxt] = useState("");
  return (
    <div>
      <input value={txt} onChange={e => setTxt(e.target.value)} />
      <button onClick={() => { if(txt) setTasks([...tasks, txt]); setTxt(""); }}>Add</button>
      <ul>
        {tasks.map((t,i) => 
          <li key={i}>{t} <button onClick={() => setTasks(tasks.filter((_,j)=>j!==i))}>remove</button></li>
        )}
      </ul>
    </div>
  );
}

