import React from "react";
import MainLayout from "../../layouts/MainLayout";
import InputForm from "./components/InputForm";
import TodoList from "modules/MainPage/components/TodoList";

const MainPage = () => {
  return (
    <MainLayout>
      <InputForm />
      <TodoList />
    </MainLayout>
  );
};

export default MainPage;
