import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getHistory } from './service/allapi';


function Watchhistory() {

  const [history, sethistory] = useState([])


  useEffect(() => {
    getwatchHistory()
  }, [])

  // create a function
  const getwatchHistory = async () => {
    const { data } = await getHistory()
    sethistory(data)
  }
  console.log(history);



  return (
    <>
      <h3>Watch history</h3>
      <div>
        <Table className='table-shadow m-3 rounded border'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>URL</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {
              history?.map((item, index) => (
                <tr>
                  <td>{index+1}</td>
                  <td>{item?.categoryName}</td>
                  <td>{item?.url}</td>
                  <td>{item?.date}</td>
                </tr>

              ))
            }

          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Watchhistory