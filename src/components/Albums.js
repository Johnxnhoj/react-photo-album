import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Albums(props) {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    axios.get("/artists").then(resp => {
      setArtists(resp.data)
    })
  }, [])

  return (
    <main className="container">
      <h1 className="h1">Albums</h1>

      <div className="All">
        {artists.map(e => (
          <Link key={e.id} to={"/Libary/" + e.id}>
            <div className="Each-a">
              <img
                className="zero"
                style={{ width: "300px", height: "300px" }}
                src={e.coverimg}
              />

              <div className="Overlay">{e.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Albums
