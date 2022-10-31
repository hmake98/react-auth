import "./Home.scss";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ReactElement } from "react";
import routes from "../router";
import Storage from "../services/storage";

const Home: React.FC = (): ReactElement => {
  const navigate = useNavigate();

  const handleSubmit = (): void => {
    Storage.clear();
    navigate(routes.login.path);
  };

  return (
    <>
      <h1> Home works! </h1>
      <Button
        borderRadius={0}
        type="button"
        variant="solid"
        colorScheme="teal"
        width="fit-content"
        onClick={handleSubmit}
      >
        Log Out
      </Button>
    </>
  );
};

export default Home;
