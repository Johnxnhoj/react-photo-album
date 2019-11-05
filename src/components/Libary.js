import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Libary(props) {
  const [pictures, setPictures] = useState([])
  const [artists, setArtists] = useState([])
  const [artist, setArtist] = useState([])
  const artistId = props.match.params.id

  useEffect(() => {
    axios.get(`/artists/${artistId}?_embed=pictures`).then(resp => {
      setArtist(resp.data)
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
      <Link className="arrow1" to={"/"}>
        <div>&larr;</div>
      </Link>

      <h1 className="nono">{artist.name}</h1>

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
              <img
                className="first"
                style={{ width: "300px", height: "300px" }}
                src={p.image}
              />
              <div className="A-name">{p.namepic}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Libary
