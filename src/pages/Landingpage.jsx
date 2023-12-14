import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {

  // redirect from one page to another page we can use hook. ie,useNavigate()

  const navigate = useNavigate()
  const handleNavigate = () => {


    navigate('/home')

  }


  return (
    <>
      <Row>

        <Col></Col>

        <Col lg={6}>

          <h1>WELCOME VIDEOO.COM</h1>
          <p style={{ textAlign: 'justify' }}>Where user can use their favorite videos . user can upload any youtube video by copy and paste their url in to Videoo.com will allow to add and remove their uploaded videos and also arrange them in different categories by drag and drop it is free try it now!!</p>

          <button onClick={handleNavigate} className='btn btn-success'>Click Here To Know more</button>


        </Col>

        <Col lg={5}>
          <img src="https://assets.markup.io/app/uploads/2022/08/Annotate-video-header.jpg" width={"600px"} className='image-fluid' />
        </Col>


      </Row>


    </>
  )
}

export default Landingpage