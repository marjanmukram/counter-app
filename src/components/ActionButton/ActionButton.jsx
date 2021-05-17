import React from "react";
import { Button } from "@material-ui/core";

const ActionButton = ({ color, className, startIcon, text }) => {
  return (
    <Button
      variant='contained'
      color={color}
      className={className}
      startIcon={startIcon}
    >
      {text}
    </Button>
  );
};

export default ActionButton;
