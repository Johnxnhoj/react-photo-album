import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Libary(props) {
  const [pictures, setPictures] = useState([])
  const [artists, setArtists] = useState([])
  const id = props.match.params.id

  useEffect(() => {
    axios.get(`/artists/${id}?_embed=pictures`).then(resp => {
      setPictures(resp.data.pictures)
    })
  }, [props.match.params])

  useEffect(() => {
    axios.get("/artists").then(resp => {
      setArtists(resp.data)
    })
  }, [])

  return (
    <main className="container2">
      <Link className="arrow" to={"/"}>
        <div>&larr;</div>
      </Link>

      <div className="Bar">
        <span>Artists</span>
        {artists.map(e => (
          <Link key={e.id} to={"/Libary/" + e.id}>
            <div className="Name-box">
              <div className="A-name">{e.name}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="All2">
        {pictures.map(p => (
          <Link key={p + p.id} to={"/Picture/" + p.id}>
            <div className="Each-a">
              <img style={{ width: "300px", height: "300px" }} src={p.image} />
              <div className="A-name">{p.namepic}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Libary
