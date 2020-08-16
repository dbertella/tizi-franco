import React from "react"
import { Card, Heading, Box, Flex, Text, Link } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

import SEO from "../components/seo"
import { Note } from "../components/Note"
import { Rect } from "../components/Rect"

const IndexPage = () => (
  <>
    <Flex
      sx={{
        minHeight: "95vh",
        justifyContent: "center",
        alignItems: "center",
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
            paddingBottom: ["130%", "100%"],
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
              flexDirection: "column",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Note sx={{ width: [35, 45, 55], fill: "primary" }} />
            <Rect sx={{ mt: 2, fill: "primary" }} />
          </Flex>
          <Box
            sx={{
              position: "absolute",
              bottom: 3,
              maxWidth: "80%",
            }}
          >
            <Text sx={{ fontSize: [2, null, 3] }}>
              12 SETTEMBRE ORE 16:30 <br />
              PRESSO
            </Text>
            <Text sx={{ whiteSpace: "nowrap", ml: 1 }}>
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
            <Text
              sx={{ display: "block", mt: [3, 2, 3], fontSize: [1, null, 2] }}
            >
              Dopo la cerimonia a seguire aperitivo, cena e taglio della torta.
            </Text>
            <Heading
              sx={{
                mt: [3, null, 4],
                fontSize: [2, 3, 5],
              }}
            >
              Gradita conferma
              <Link
                as={GatsbyLink}
                // @ts-ignore
                to="/conferma-presenza"
                sx={{
                  ml: 2,
                  whiteSpace: "nowrap",
                }}
              >
                qui
              </Link>
            </Heading>
            {/* <Link
              sx={{
                mt: [3, null, 4],
                fontSize: [2, 3, 5],
                color: "muted",
                display: "block",
              }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/explore/tags/gezamore/"
            >
              #gezamore
            </Link> */}
          </Box>
        </Box>
      </Card>
    </Flex>
    <Link
      as={GatsbyLink}
      /* @ts-ignore */
      to="/regalo"
      sx={{
        display: "block",
        textAlign: "center",
        color: "muted",
      }}
    >
      Se stai pensando a un regalo clicca qui
    </Link>
  </>
)

export default IndexPage
