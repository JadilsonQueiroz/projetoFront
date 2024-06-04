import { useEffect, useState } from "react";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";
import './App.css';  // Import the CSS file
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons from react-icons

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text, responsavel, telefone, email) => {
    setIsUpdating(true);
    setText(text);
    setResponsavel(responsavel);
    setTelefone(telefone);
    setEmail(email);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>TaskWorks</h1>

        <div className="form">
          <input
            type="text"
            placeholder="Adicione uma tarefa..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Digite seu nome..."
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Digite seu telefone..."
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Digite seu email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="add-btn"
            onClick={
              isUpdating
                ? () => updateToDo(
                    toDoId, text, responsavel, telefone, email,
                    setToDo, setText, setResponsavel, setTelefone, setEmail, setIsUpdating
                  )
                : () => addToDo(
                    text, responsavel, telefone, email,
                    setText, setResponsavel, setTelefone, setEmail, setToDo
                  )
            }
          >
            {isUpdating ? "Atualizar" : "Adicionar"}
          </button>
        </div>

        <div className="list">
          {toDo.map((item) => (
            <div className="toDoItem" key={item._id}>
              <div className="toDoText">
                <h3>{item.text}</h3>
                <p>Responsável: {item.responsavel}</p>
                <p>Telefone: {item.telefone}</p>
                <p>Email: {item.email}</p>
              </div>
              <div className="toDoActions">
                <FaEdit className="editIcon" onClick={() => updateMode(item._id, item.text, item.responsavel, item.telefone, item.email)} />
                <FaTrash className="deleteIcon" onClick={() => deleteToDo(item._id, setToDo)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
