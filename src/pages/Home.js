import { Button } from "@chakra-ui/react"
import React from "react"
import { useNavigate } from "react-router-dom"
import { routes } from "../router"
import "../styles/Home.css"
import Storage from "../services/storage"

function Home() {
  const navigate = useNavigate()
  const handleSubmit = () => {
    Storage.clear()
    navigate(routes.login.path)
  }
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
  )
}

export default Home
