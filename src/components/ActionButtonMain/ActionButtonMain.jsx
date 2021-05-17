import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import { plusMinusDelete } from "../counter/counter.styles";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";

const ActionButtonMain = () => {
  const pmdClasses = plusMinusDelete();

  return (
    <div>
      <ActionButton
        color='secondary'
        className={pmdClasses.pmdButton}
        startIcon={<ClearIcon />}
      />
      <ActionButton
        color='secondary'
        className={pmdClasses.pmdButton}
        startIcon={<DeleteIcon />}
      />
    </div>
  );
};

export default ActionButtonMain;
