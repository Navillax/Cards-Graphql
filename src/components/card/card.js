import * as React from "react"
import "./card.css"
import Btn1 from "../botones/boton1"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Card = ({
  imageData,
  title = "Titulo",
  decription = "Descripción",
  link = "+info",
}) => {
  return (
    <div className="card">
      <figure>
        <GatsbyImage className="img" image={imageData} alt={title} />
      </figure>
      <h2>{title}</h2>
      <p>{decription}</p>
      <Link to={link}>
        <Btn1>+info</Btn1>
      </Link>
    </div>
  )
}

export default Card
