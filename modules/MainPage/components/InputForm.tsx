import React, { ChangeEvent, useState } from "react";
import { Button, styled, TextField } from "@mui/material";

import { useAppDispatch } from "@/hooks/redux";
import { addPosts } from "@/store/reducers/PostReducer";


const EMPTY_POST = {
  title: "",
  text: "",
};

const InputForm = () => {
  const dispatch = useAppDispatch();

  const [newPost, setNewPost] = useState(EMPTY_POST);

  const handleClick = () => {
    if (newPost.text.trim().length && newPost.title.trim().length) {
      dispatch(addPosts(newPost));
      setNewPost(EMPTY_POST);
    }
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setNewPost({ ...newPost, title: e.target.value });

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setNewPost({ ...newPost, text: e.target.value });

  return (
    <div>
      
        <StyledTextField
          label="New title"
          id="custom-css-outlined-input"
          value={newPost.title}
          onChange={handleChangeTitle}
        />
        <StyledTextField
          label="New text"
          id="custom-css-outlined-input"
          value={newPost.text}
          onChange={handleChangeText}
        />
        <StyledButton onClick={handleClick}>Add</StyledButton>
      </div>
    
  );
};

const StyledButton = styled(Button)({
  padding: "20px",
  color: "black",
  width: "400px"
});

const StyledTextField = styled(TextField)({
  display:"flex",
  flexDirection: "column",
  margin:"20px 0px 5px 0px",
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

export default InputForm;
