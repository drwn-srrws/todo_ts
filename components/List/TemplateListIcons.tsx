import { Tooltip, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const deleteIcon = (onClick: () => void) => (
  <Tooltip title="Delete">
    <IconButton edge="end" aria-label="delete" onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  </Tooltip>
);

export const checkboxIcon = (isCompleted: boolean, onClick: () => void) => {
  return (
    <Tooltip title="add">
      <IconButton edge="end" aria-label="add" onClick={onClick}>
        {isCompleted ? (
          <Checkbox {...label} defaultChecked />
        ) : (
          <Checkbox {...label} />
        )}
      </IconButton>
    </Tooltip>
  );
};