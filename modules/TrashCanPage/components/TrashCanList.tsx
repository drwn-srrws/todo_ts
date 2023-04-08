import React from "react";

import { useAppSelector } from "@/hooks/redux";
import TemplateListItem from "@/components/List/TemplateListItem";
import TemplateList from "@/components/List/TemplateList";
import { ItemVariant } from "@/types/todo";
import { IPost } from "@/types/types";

const TrashCanList = () => {
  const { trashCan } = useAppSelector((state) => state.PostReducer);

  return (
    <>
      <TemplateList
        items={trashCan}
        renderItems={(post: IPost) => (
          <TemplateListItem
            key={post.id}
            post={post}
            variant={ItemVariant.trashCan}
          />
        )}
      ></TemplateList>
    </>
  );
};

export default TrashCanList;
