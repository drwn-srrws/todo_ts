import React, { FC, PropsWithChildren } from "react";
import NavBar from "@/components/Navigation/Navigation";
import cl from "./MainLayout.module.css"
const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <><div className={cl.container}>
      <div className={cl.content}>{children}</div>
      <NavBar />
      </div>
    </>
  );
};

export default MainLayout;
