import React from "react"
import { Card, Heading, Box, Flex, Text, Link } from "theme-ui"

import SEO from "../components/seo"
import { Note } from "../components/Note"
import { Rect } from "../components/Rect"

const IndexPage = () => (
  <Flex
    sx={{
      justifyContent: "center",
      alignItems: "center",
      my: 5,
      mx: 2,
    }}
  >
    <SEO title="Tiziana E Franco Si Sposano" />
    <Card
      sx={{
        position: "relative",
        width: 800,
        maxWidth: "100%",
        p: 0,
        overflow: "hidden",
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
          padding: 3,
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
            fontSize: [5, 6, 7],
            textTransform: "uppercase",
            textAlign: "right",
            letterSpacing: "0.1em",
          }}
        >
          Tiziana E<br />
          Franco Si
          <br />
          Sposano
        </Heading>
        <Flex
          sx={{
            position: "absolute",
            right: 4,
            width: [25, 35, 55],
            flexDirection: "column",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Note sx={{ width: [25, 35, 55], fill: "primary" }} />
          <Rect sx={{ mt: 2, fill: "primary" }} />
        </Flex>
        <Box
          sx={{
            position: "absolute",
            bottom: 3,
            maxWidth: "80%",
          }}
        >
          <Text sx={{ fontSize: [1, 2, 3] }}>
            12 SETTEMBRE ORE 16:30 <br />
            PRESSO{" "}
            <Link
              href="http://www.villaexmagnirizzoli.it/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VILLA MAGNI EX RIZZOLI
            </Link>
            <Link
              sx={{ ml: 1 }}
              href="https://www.google.com/maps/place/Villa+Ex+Magni+Rizzoli/@45.8527137,9.270366,17z/data=!3m1!4b1!4m5!3m4!1s0x47841e4836e82773:0x4e1bed367587a67b!8m2!3d45.85271!4d9.27256"
              target="_blank"
              rel="noopener noreferrer"
            >
              (map)
            </Link>
          </Text>
          <Heading
            sx={{
              mt: 2,
              fontSize: [2, 3, 5],
            }}
          >
            Gradita conferma a Franco{" "}
            <Link
              href="https://wa.me/393283990057?text=Noi%20ci%20siamo!"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              +39 3283990057
            </Link>
          </Heading>
        </Box>
      </Box>
    </Card>
  </Flex>
)

export default IndexPage
