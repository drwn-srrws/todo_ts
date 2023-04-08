import React from "react";

import { List } from "@mui/material";

interface ListProps<T> {
  items: T[];
  renderItems: (item: T) => React.ReactNode;
}

export default function TemplateList<T>({ items, renderItems }: ListProps<T>) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {items.map(renderItems)}
    </List>
  );
}

//export default TemplateList;
