import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const Message = () => {
    const[msgData,setMsgData]=useState([]);
    const [error,setError]=useState(null);
const [refresh,setRefresh]=useState(true)
const [currentPage, setCurrentPage] = useState(1);
    const [messagesPerPage] = useState(10);
    const handleDelete = async (id) =>{
        
        try{
          const response =await axios.delete(`http://localhost:5000/api/message/${id}`)
          console.log('deleted message',response)
          toast.success('Deleted Successfully')
          setRefresh(!refresh)
        }catch(err){
            if (err.response) {
          setError(err.response.data.message);
        } else {
            setError("An error occurred while deleting the message.");
        }
        }
      }

    useEffect(()=>{
        const fetchmsgData = async()=>{
            try{
                const response = await axios.get('http://localhost:5000/api/message/');
                console.log(response);
                setMsgData(response.data.data);
            }catch(error){
                console.log(error);
            }
        };
        fetchmsgData();
    },[refresh])
// Logic to paginate data
const indexOfLastMessage = currentPage * messagesPerPage;
const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
const currentMessages = msgData.slice(indexOfFirstMessage, indexOfLastMessage);

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

// Generate page numbers
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(msgData.length / messagesPerPage); i++) {
    pageNumbers.push(i);
}
  return (
    <div className='view p-10'>
        <h2 className='view1'>Message Details</h2>
        {currentMessages && currentMessages.length > 0 ?(
            currentMessages.map((item)=>{
                return(
                    <div className='view2'>
                        <p>Email :{item.email}</p>
                        <p>Name:{item.name}</p>
                        <p>Message:{item.message}</p>
                        <button onClick={() => handleDelete(item._id)} className='delebtn'>Delete</button>
                        {error && <p>{error}</p>}
                        {/* <button className='delebtn'>Delete</button> */}
                        </div>
                )
            })

        ):(
            <p>Loading Message data...</p>

            )}
      <div className='pgbtn'>
                <button className='pgbt2' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                {pageNumbers.map(number => (
                    <button className='pgbt1' key={number} onClick={() => paginate(number)} disabled={currentPage === number ? 'active' : ''}>
                        {number}
                    </button>
                ))}
                <button className='pgbt2' onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(msgData.length / messagesPerPage)}>
                    Next
                </button>
            </div>
    </div>
  );
};

export default Message

