import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { zero, plusMinusDelete } from "./counter.styles";
import ActionButton from "../ActionButton/ActionButton";

export default function IconLabelButtons() {
  const zClasses = zero();
  const pmdClasses = plusMinusDelete();

  return (
    <div>
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
        <Button
          variant='contained'
          color='secondary'
          className={pmdClasses.pmdButton}
          startIcon={<RemoveCircleOutlineIcon />}
        >
          {" "}
        </Button>
        <Button
          variant='contained'
          color='secondary'
          className={pmdClasses.pmdButton}
          startIcon={<DeleteIcon />}
        >
          {" "}
        </Button>
      </div>
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
    </div>
  );
}
