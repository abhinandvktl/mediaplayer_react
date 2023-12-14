import React from 'react'
import { PlusCircle } from 'react-feather'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel, Form } from 'react-bootstrap';
import { addvideo } from './service/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({handleresponse}) {

    const [uploaddata, setuploaddata] = useState({
        id: "", caption: "", thumbnail: "", url: ""
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // define setInput function
    const setInput = (e) => {
        const { name, value } = e.target
        // spread operator(...) is used to display all key values when a single key value is entered
        setuploaddata({ ...uploaddata, [name]: value })
    }
    console.log(uploaddata);




    // extract embedded url from youtube original url
    const extractUrl = (e) => {
        let youtubeurl = e.target.value

        if (youtubeurl.includes("v=")) {
            let index = youtubeurl.indexOf("v=")
            console.log(index);

            let videourl = youtubeurl.substring(index + 2, index + 13)
            console.log(videourl);

            let videodata = uploaddata
            videodata.url = `https://www.youtube.com/embed/${videourl}`
            setuploaddata(videodata)
        }

        console.log(uploaddata);

    }

    const handleAdd = async () => {
        const { id, caption, thumbnail, url } = uploaddata
        if (!id || !caption || !thumbnail || !url) {
            toast.error("please fill the form completely",{position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",})
        }
        else {
            // make api call
            const response = await addvideo(uploaddata)


            if (response.status >= 200 && response.status <= 300) {
                // console.log(response);
                handleresponse(response.data)

                setShow(false);
                toast.success("new video uploaded successfully", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",

                })
            } else {
                toast.warning("provide a unique id !!!",{
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            }
        }
    }

    // youtube original url
    // https://www.youtube.com/watch?v=Frp0zC4643U

    // embedded url
    // https://www.youtube.com/embed/Frp0zC4643U

    return (
        <>
            <div className='btn' onClick={handleShow}>
                <PlusCircle color='green' size={90} />
            </div>

            {/* model */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload video details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        {/* id */}
                        <FloatingLabel className='mb-3' controlId="floatingid" label="id">
                            <Form.Control name='id' onChange={setInput} type="text" placeholder="Uploading video id" />
                        </FloatingLabel>

                        {/* caption */}
                        <FloatingLabel className='mb-3' controlId="floatingcaption" label="Uploading video caption">
                            <Form.Control name='caption' onChange={setInput} type="text" placeholder="Video caption" />
                        </FloatingLabel>

                        {/* video cover image url */}
                        <FloatingLabel className='mb-3' controlId="floatingimage" label="Video cover image url">
                            <Form.Control name='thumbnail' onChange={setInput} type="text" placeholder="Video cover image url" />
                        </FloatingLabel>

                        {/* uploading video link */}
                        <FloatingLabel className='mb-3' controlId="floatinglink" label="Uploading video link">
                            <Form.Control name='url' onChange={extractUrl} type="text" placeholder="video link" />
                        </FloatingLabel>


                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>


            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />


        </>
    )
}

export default Add