import MainLayout from "@/layouts/MainLayout";
import ModalButton from "./components/ModalButton";
import TrashCanList from "./components/TrashCanList";

const TrashCanPage = () => {


  return (
    <MainLayout>
      <TrashCanList />
      <ModalButton />
    </MainLayout>
  );
};

export default TrashCanPage;
