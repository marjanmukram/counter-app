import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const zero = makeStyles(() => ({
  zButton: {
    color: "white",
    padding: "20px",
    border: "3px solid black",
    backgroundColor: "liteblue",
    marginLeft: "200px"
  }
}));

const plusMinusDelete = makeStyles(() => ({
  pmdButton: {
    color: "white",
    padding: "20px",
    border: "3px solid black",
    backgroundColor: "litepink",
    marginLeft: "20px"
  }
}));

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

