import React from "react";

const Notification = ({ success, error, message }) => {
  if (!message) return null;

  return (
    <div className={(success && "success") || (error && "error")}>
      {message}
    </div>
  );
};

export default Notification;
