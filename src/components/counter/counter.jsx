import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { zero, plusMinusDelete } from "./counter.styles";

export default function IconLabelButtons() {
  const zClasses = zero();
  const pmdClasses = plusMinusDelete();

  return (
    <div>
      <div>
        <Button
          variant='contained'
          color='secondary'
          className={pmdClasses.pmdButton}
          startIcon={<ClearIcon />}
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
        <Button
          DeleteOutlineSharpIcon
          variant='contained'
          color='primary'
          className={zClasses.zButton}
        >
          ZERO
        </Button>
        <Button
          variant='contained'
          color='secondary'
          className={pmdClasses.pmdButton}
          startIcon={<AddCircleOutlineIcon />}
        >
          {" "}
        </Button>
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
        <Button
          DeleteOutlineSharpIcon
          variant='contained'
          color='primary'
          className={zClasses.zButton}
        >
          ZERO
        </Button>
        <Button
          variant='contained'
          color='secondary'
          className={pmdClasses.pmdButton}
          startIcon={<AddCircleOutlineIcon />}
        >
          {" "}
        </Button>
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
        <Button
          DeleteOutlineSharpIcon
          variant='contained'
          color='primary'
          className={zClasses.zButton}
        >
          ZERO
        </Button>
        <Button
          variant='contained'
          color='secondary'
          className={pmdClasses.pmdButton}
          startIcon={<AddCircleOutlineIcon />}
        >
          {" "}
        </Button>
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
        <Button
          DeleteOutlineSharpIcon
          variant='contained'
          color='primary'
          className={zClasses.zButton}
        >
          ZERO
        </Button>
        <Button
          variant='contained'
          color='secondary'
          className={pmdClasses.pmdButton}
          startIcon={<AddCircleOutlineIcon />}
        >
          {" "}
        </Button>
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
    </div>
  );
}
