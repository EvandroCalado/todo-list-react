import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

const Home = (props) => {
  const [todos, setTodos] = useState([]);

  const handleTodo = (todo) => {
   
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    console.log(id)
    console.log(todos)
  }

  return (
    <div>
      <Container maxWidth="xs" style={{ marginTop: "1rem" }}>
        <Form handleTodo={handleTodo} />
        <List sx={{ marginTop: "1rem" }}>
          {todos.map((todo, i) => (
            <div key={i} style={{ marginTop: "1rem" }}>
              <TodoItem todo={todo} deleteTodo={deleteTodo} />
            </div>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default Home;
