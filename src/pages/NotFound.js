import { Text } from "@chakra-ui/react"
import React from "react"
import "../styles/NotFound.css"

function NotFound() {
  return (
    <div>
      <Text
        color="gray.600"
        isTruncated
        fontSize={"4xl"}
        textAlign={"center"}
        mt={"20"}
      >
        Page not found!
      </Text>
    </div>
  )
}

export default NotFound
