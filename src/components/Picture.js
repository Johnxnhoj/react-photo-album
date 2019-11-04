import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import axios from "axios"

function Pictures(props) {
  const [pictures, setPictures] = useState([])
  const id = props.match.params.id
  useEffect(() => {
    axios.get(`/artists/${id}?_embed=pictures`).then(resp => {
      setPictures(resp.data.pictures)
    })
  }, [])

  return (
    <main className="container3">
      <Link className="arrow" to={"/Libary/" + id}>
        <div>&larr;</div>
      </Link>
      <div className="One-pic">
        {pictures.map(p => (
          <div className="Each-a">
            <div className="A-name">{p.namepic}</div>
            <img
              className="MySlides"
              style={{ width: "600px", height: "600px" }}
              src={p.image}
            />
            <button class="w3-button w3-display-left" onclick="plusDivs(-1)">
              &#10094;
            </button>
            <button class="w3-button w3-display-right" onclick="plusDivs(+1)">
              &#10095;
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Pictures
