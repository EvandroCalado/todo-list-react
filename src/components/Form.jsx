import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";

export default function Form(props) {
  const [text, setText] = useState(null);

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
          onClick={() => props.handleTodo(text)}
        >
          Add
        </Button>
      </div>
    </Paper>
  );
}
