import "./NotFound.scss";
import { Text } from "@chakra-ui/react";
import { ReactElement } from "react";

const NotFound: React.FC = (): ReactElement => {
  return (
    <div>
      <Text
        color="gray.600"
        isTruncated
        fontSize="4xl"
        textAlign="center"
        mt="20"
      >
        Page not found!
      </Text>
    </div>
  );
};

export default NotFound;
