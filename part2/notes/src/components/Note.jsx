import React from "react";

const Note = ({ note }) => {
  return <div key={note.id}>{note.content}</div>;
};

export default Note;
