import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  checkIsTranshCanEmpty,
  returnRemovePosts,
  removeTrashCanPosts,
  resetSelection,
} from "@/store/reducers/PostReducer";
import { Button, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./Modal.module.css";
const ModalButton = () => {
  const dispatch = useAppDispatch();
  const { isTrashCanEmpty } = useAppSelector((state) => state.PostReducer);
  const [isVisible, setIsVisible] = useState(false);
  const rootClasses = [classes.myModal, classes.active];
  if (isVisible) {
    rootClasses.push(classes.active);
  }
  const ResetSelectionPosts = () => {
    dispatch(resetSelection());
  };
  const CheckIsTranshCanEmpty = () => {
    dispatch(checkIsTranshCanEmpty());
  };
  useEffect(() => {
    ResetSelectionPosts();
    CheckIsTranshCanEmpty();
  }, []);
  return (
    <>
      {isTrashCanEmpty ? (
        <div style={{textAlign:"center"}}>Trash Can Is Empty</div>
      ) : (
        <StyledButton onClick={() => setIsVisible(true)}>actions</StyledButton>
      )}
      {isVisible && (
        <div
          className={rootClasses.join(" ")}
          onClick={() => setIsVisible(false)}
        >
          <Button
            className={classes.myModalContent}
            onClick={() => dispatch(returnRemovePosts())}
          >
            Return posts
          </Button>
          <Button
            className={classes.myModalContent}
            onClick={() => dispatch(removeTrashCanPosts())}
          >
            Empty trash
          </Button>
        </div>
      )}
      
    </>
    
  );
};
const StyledButton = styled(Button)({
  padding: "20px",
  color: "black",
  width: "400px"
});

export default ModalButton;
