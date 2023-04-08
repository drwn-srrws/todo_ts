import React from "react";

import TemplateList from "@/components/List/TemplateList";
import TemplateListItem from "@/components/List/TemplateListItem";
import { useAppSelector } from "@/hooks/redux";
import { IPost } from "@/types/types";
import { ItemVariant } from "@/types/todo";

const TodoList = () => {
  const { posts } = useAppSelector((state) => state.PostReducer);

  return (
    <TemplateList
      items={posts}
      renderItems={(post: IPost) => (
        <TemplateListItem key={post.id} post={post} variant={ItemVariant.posts} />
      )}
    />
  );
};

export default TodoList;
