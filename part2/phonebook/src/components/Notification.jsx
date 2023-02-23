import React from "react";

const Notification = ({ error, message }) => {
  if (error) return <div className="error">{error}</div>;
  if (message) return <div className="success">{message}</div>;
  return null;
};

export default Notification;
