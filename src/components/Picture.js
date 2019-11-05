import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function(props) {
  const [pictures, setPictures] = useState({})

  const [leftId, setLeftId] = useState("")
  const [rightId, setRightId] = useState("")
  const [artistId, setArtistId] = useState("")

  const pictureId = props.match.params.id

  useEffect(() => {
    axios.get(`/pictures/${pictureId}`).then(resp => {
      const pic = resp.data
      setArtistId(pic.artistId)
      axios.get(`/pictures?artistId=${pic.artistId}`).then(resp2 => {
        const pictures = resp2.data

        let currentIndex = null

        pictures.forEach((image, i) => {
          if (image.id == pictureId) {
            currentIndex = i
          }
        })
        if (currentIndex === 0) {
          setLeftId(pictures[pictures.length - 1].id)
          setRightId(pictures[currentIndex + 1].id)
        } else if (currentIndex === pictures.length - 1) {
          setLeftId(pictures[currentIndex - 1].id)
          setRightId(pictures[0].id)
        } else {
          setLeftId(pictures[currentIndex - 1].id)
          setRightId(pictures[currentIndex + 1].id)
        }
      })
    })
  }, [pictureId])

  useEffect(() => {
    axios.get(`/pictures/${pictureId}`).then(resp => {
      setPictures(resp.data)
    })
  }, [pictureId])

  return (
    <div className="picture3">
      <Link className="arrow2" to={`/Libary/${artistId}`}>
        &larr;
      </Link>
      <div className="Channge-a">
        <Link className="L-A" to={"/picture/" + leftId}>
          &larr;
        </Link>

        <Link className="R-A" to={"/picture/" + rightId}>
          &rarr;
        </Link>
      </div>
      <hi>{pictures.namepic}</hi>
      <img className="bigphoto" src={pictures.image} alt={pictures.namepic} />
    </div>
  )
}
