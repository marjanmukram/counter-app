import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import { zero, plusMinusDelete } from "../counter/counter.styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";

const ActionButtonRow = () => {
  const zClasses = zero();
  const pmdClasses = plusMinusDelete();

  return (
    <div>
      <ActionButton
        color='primary'
        className={zClasses.zButton}
        text={"ZERO"}
      />
      <ActionButton
        color='secondary'
        className={pmdClasses.pmdButton}
        startIcon={<AddCircleOutlineIcon />}
      />
      <ActionButton
        color='secondary'
        className={pmdClasses.pmdButton}
        startIcon={<RemoveCircleOutlineIcon />}
      />
      <ActionButton
        color='secondary'
        className={pmdClasses.pmdButton}
        startIcon={<DeleteIcon />}
      />
    </div>
  );
};

export default ActionButtonRow;
