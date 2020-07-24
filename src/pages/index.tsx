import React from "react"
import { Card, Heading, Box, Flex } from "theme-ui"

import SEO from "../components/seo"

const IndexPage = () => (
  <Flex
    sx={{
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      overflow: "hidden",
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
            letterSpacing: "0.5rem",
          }}
        >
          È Ufficiale!
        </Heading>
        <Heading
          as="h1"
          sx={{
            fontSize: [5, 6, 8],
            textTransform: "uppercase",
            letterSpacing: "1rem",
            textAlign: "right",
          }}
        >
          Tiziana E Franco Si Sposano
        </Heading>
      </Box>
    </Card>
  </Flex>
)

export default IndexPage
