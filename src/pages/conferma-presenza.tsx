import React from "react"

import SEO from "../components/seo"
import { Flex, Link } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

const ConfirmationForm = () => (
  <Flex
    sx={{
      height: "100vh",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <SEO title="Conferma la tua presenza" />
    <Link as={GatsbyLink} to="/">
      Indietro
    </Link>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScIg6SsARMp2d4y5gL0VKZsxAXm26o8flUwGNGgBVEPq8GJfA/viewform?embedded=true"
      width="100%"
      height="90%"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
    >
      Loading…
    </iframe>
  </Flex>
)

export default ConfirmationForm
