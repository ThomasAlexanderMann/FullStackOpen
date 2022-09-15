import React from "react";

const AddNewNumberForm = ({
  newName,
  setNewName,
  newPhoneNumber,
  setNewPhoneNumber,
  submitHandler,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <div>
        name:
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number:
        <input
          value={newPhoneNumber}
          onChange={(e) => {
            setNewPhoneNumber(e.target.value);
          }}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddNewNumberForm;
