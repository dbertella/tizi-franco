import React from "react"

import SEO from "../components/seo"
import { Present } from "../components/Present"
import { Flex, Link, Text, Card, Box } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

const PresentPage = () => {
  return (
    <Flex
      sx={{
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mx: 2,
      }}
    >
      <SEO title="Se stai pensando a un regalo eccoci qui" />
      <Link
        as={GatsbyLink}
        /* @ts-ignore */
        to="/"
      >
        Torna alla home
      </Link>
      <Box sx={{ height: "90%", width: 800, maxWidth: "100%" }}>
        <Card
          sx={{
            mt: 3,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Flex sx={{ justifyContent: "center", mb: 3 }}>
            <Present sx={{ width: 200, height: 200 }} />
          </Flex>
          <Text>
            Il pensiero più bello che possiate farci è essere con noi nel nostro
            grande giorno. Ma se gradite farci un regalo, preferiamo metterlo
            nel salvadanaio, e quando lo useremo in futuro, penseremo con gioia
            a voi e al vostro gesto.
          </Text>
          <Text
            sx={{
              mt: 4,
              display: "block",
              border: "1px solid",
              borderColor: "light",
              p: 2,
            }}
          >
            <strong>
              Di seguito le coordinate bancarie del conto corrente Fineco.
            </strong>
            <br />
            <strong>INTESTATO A:</strong> MARTOCCIA TIZIANA
            <br />
            <strong>IBAN:</strong> IT82D0301503200000002771852
            <br />
            <strong>BIC Banca ricevente (swift):</strong> UNCRITMM
            <br />
            <strong>BIC Banca beneficiario:</strong> FEBIITM1
          </Text>
        </Card>
      </Box>
    </Flex>
  )
}

export default PresentPage
