import React from 'react'
import styled from 'styled-components'

import pose from './Pose.jpg'

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const PhotosPage = () => (
  <Centered>
    <img style={{ height: '50vw' }} src={pose} />
  </Centered>
)

export default PhotosPage
