import * as React from "react"
import { Link } from "gatsby"
import Card from "../components/card/card"

import Layout from "../components/layout"
import { getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Inicio</h1>

    <div className="contenedorCard">
      {data.allDatasJson.edges.map(({ node }) => {
        const imageData = getImage(node.image)
        return (
          <Card
            decription={node.description}
            imageData={imageData}
            title={node.title}
            link={node.link}
          ></Card>
        )
      })}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allDatasJson {
      edges {
        node {
          id
          link
          title
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: WEBP
                width: 300
                aspectRatio: 1.80
              )
            }
          }
          description
        }
      }
    }
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage
