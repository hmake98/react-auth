import "./Home.css";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ReactElement } from "react";
// eslint-disable-next-line import/no-cycle
import routes from "../router";
import Storage from "../services/storage";

// eslint-disable-next-line react/function-component-definition
const Home: React.FC = (): ReactElement => {
  const navigate = useNavigate();
  const storage = new Storage();

  const handleSubmit = (): void => {
    storage.clear();
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
