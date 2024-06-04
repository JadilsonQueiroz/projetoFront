import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text,responsavel,telefone,email, updateMode, deleteToDo }) => {
  return (
    <div className="todo">
      <div className="text">
        <span>Atividade: {text}</span>
      </div>
      <div className="telefone">
        <span>Telefone: {telefone}</span>
      </div>
      <div className="email">
        <span>Email: {email}</span>
      </div>
      <div className="responsabel">
        <span>Responsavel: {responsavel}</span>
      </div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
