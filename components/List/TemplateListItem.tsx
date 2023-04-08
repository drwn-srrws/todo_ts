import React, { FC, useRef } from "react";
import { IPost } from "types/types";
import ImageIcon from "@mui/icons-material/Image";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";


import { removePosts, selectPost } from "@/store/reducers/PostReducer";
import { ItemVariant } from "@/types/todo";

import { useAppDispatch } from "@/hooks/redux";
import { checkboxIcon, deleteIcon } from "./TemplateListIcons";

interface TemplateListItemProps {
  post: IPost;
  variant: ItemVariant;
}

const TemplateListItem: FC<TemplateListItemProps> = ({ post, variant }) => {
  const dispatch = useAppDispatch();
  

  return (
    <>
      <ListItem
        style={{ position: "relative" }}
        alignItems="flex-start"
        sx={{ width: 400 }}
        secondaryAction={
          variant === ItemVariant.posts
            ? deleteIcon(() => dispatch(removePosts(post.id)))
            : checkboxIcon(post.isCompleted, () => {
                dispatch(selectPost(post));
              })
        }
      >
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          
          primary={post.title}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {post.subtitle}
              </Typography>
              <Typography
                sx={{ display: "block" }}
                component="span"
                textAlign="right"
                variant="subtitle2"
                color="text.secondary"
              >
                {post.date}
              </Typography>
            </>
          }
        />
      
      </ListItem>
    </>
  );
};


export default TemplateListItem;
