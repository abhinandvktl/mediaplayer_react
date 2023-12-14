import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import View from './View'
import Add from './Add'
import Category from './Category'
import { Link } from 'react-router-dom'



function Home() {

  const[serverRes,setserverRes]=useState({})

  const handleresponse=(res)=>{
    setserverRes(res)
  }



  return (
    <>
      <h1 className='text-info ms-5 mb-5'>All Video Cards</h1>
      
      <Link to={'/watchhistory'} style={{textDecoration:"none",fontSize:"25px",color:"blue"}} >Watch history</Link>

      <div className='container-fluid'>
        <Row>
          {/* Add component selector */}
          <Col lg={1}>
            <Add handleresponse={handleresponse}/>
          </Col>

          {/* View component selector */}
          <Col lg={7}>
            <View serverRes={serverRes}/>
          </Col>

          {/* Category component selector */}
          <Col lg={4}>
            <Category/>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home



// 1. create awatch history tab in home page
// 2. create new component for watch history
  // table format(no., card name , link, title)
// 3. create a watch history key in to json and value as array. When we click on the card add data to db.json and get watch history in table

