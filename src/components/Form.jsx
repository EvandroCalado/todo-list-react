import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";

export default function Form({handleTodo}) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const addTodo = (text) => {
    const task = {text: text, id: id}
    setId(id + 1)
    handleTodo(task)
  }

  

  return (
    <Paper style={{ padding: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          style={{ width: "80%" }}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
          variant="text"
          style={{ padding: "1rem" }}
          onClick={() => addTodo(text)}
        >
          Add
        </Button>
      </div>
    </Paper>
  );
}
