import React from 'react'
import family from './gallery/family.jpg'
import both from './gallery/both.jpg'
import tajMahal from './gallery/taj_mahal.jpg'
import temple from './gallery/temple.jpg'
import outside from './gallery/outside.jpg'
import formal from './gallery/formal.jpg'
import walkInPark from './gallery/walk_in_park.jpg'

const PhotosPage = () => (
  <div>
    <img src={family} />
    <img src={both} />
    <img src={tajMahal} />
    <img src={temple} />
    <img src={outside} />
    <img src={formal} />
    <img src={walkInPark} />
  </div>
)

export default PhotosPage
