import React from "react"
import { Card, Heading, Box, Flex } from "theme-ui"

import SEO from "../components/seo"

const IndexPage = () => (
  <Flex
    sx={{
      justifyContent: "center",
      alignItems: "center",
      my: 5,
      mx: 1,
    }}
  >
    <SEO title="Tiziana E Franco Si Sposano" />
    <Card
      sx={{
        position: "relative",
        width: 800,
        maxWidth: "90%",
        p: 0,
        ":after": {
          content: '""',
          display: "block",
          paddingBottom: "100%",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          padding: 2,
        }}
      >
        <Heading
          as="h3"
          sx={{
            textTransform: "uppercase",
            fontSize: [2, 3, 5],
            textAlign: "right",
            fontFamily: "body",
            letterSpacing: "0.2em",
          }}
        >
          È Ufficiale!
        </Heading>
        <Heading
          as="h1"
          sx={{
            fontSize: [6, 7, 8],
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            textAlign: "right",
          }}
        >
          Tiziana E<br />Franco Si<br />Sposano
        </Heading>
      </Box>
    </Card>
  </Flex>
)

export default IndexPage
