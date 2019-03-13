import React from 'react'
import styled from 'styled-components'

import family from './gallery/family.jpg'
import both from './gallery/both.jpg'
import tajMahal from './gallery/taj_mahal.jpg'
import temple from './gallery/temple.jpg'
import outside from './gallery/outside.jpg'
import formal from './gallery/formal.jpg'
import walkInPark from './gallery/walk_in_park.jpg'
import pose from './Pose.jpg'

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const PhotosPage = () => (
  <Centered>
    <img src={pose} />
    <img src={family} />
    <img src={both} />
    <img src={tajMahal} />
    <img src={temple} />
    <img src={outside} />
    <img src={formal} />
    <img src={walkInPark} />
  </Centered>
)

export default PhotosPage
