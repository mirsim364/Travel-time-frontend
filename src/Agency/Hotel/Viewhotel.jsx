import axios from 'axios';
import React, { useEffect, useState } from 'react'
import"./hotel.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Viewhotel = () => {
    const [vhotelData,setVhotelData]=useState([]);
    const [error,setError]=useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [hotelsPerPage] = useState(1); // Number of hotels per page
    const [refresh,setRefresh]=useState(true)
    const navigate=useNavigate()

    const handleDelete = async (id) =>{
        
        try{
          const response =await axios.delete(`http://localhost:5000/api/hotel/${id}`)
          console.log('deleted hotel',response)
          toast.success('Deleted Successfully')
          setRefresh(!refresh)
        }catch(err){
            if (err.response) {
          setError(err.response.data.message);
        } else {
            setError("An error occurred while deleting the hotel.");
        }
        }
      }
      let handleUp=(id)=>{
        navigate(`/agency/updatehotel/${id}`)
      }

    useEffect(()=>{
        const fetchvhotelData =async ()=>{
            try{
                const response =await axios.get('http://localhost:5000/api/hotel/');
                setVhotelData(response.data.data);
                console.log('hotel',response);
            }catch(error){
                console.log(error);
            }
        };
        fetchvhotelData();
        console.log('abcd',vhotelData);
    },[refresh]);

// Logic to paginate data
const indexOfLastHotel = currentPage * hotelsPerPage;
const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
const currentHotels = vhotelData.slice(indexOfFirstHotel, indexOfLastHotel);

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

// Generate page numbers
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(vhotelData.length / hotelsPerPage); i++) {
    pageNumbers.push(i);
}

  return (
    <div className='view p-10' >
        <h2 className='view1'>Hotel Details</h2>
        {currentHotels.length > 0 ?(

            currentHotels.map((item)=>{
                return(
                    <div className='view2 '>
                        <p>HOTEL NAME   :{item.hotelname}</p>
                        <p>PHONE NUMBER :{item.phonenumber}</p>
                        <p>EMAIL       :{item.email}</p>
                        <p>ADDRESS     :{item.address}</p>
                        <p>SERVICE     :{item.service}</p>
                        {/* <p style={'text-right'}> </p> */}

                        <button onClick={() => handleDelete(item._id)} className='delebtn'>Delete</button>
                        {error && <p>{error}</p>}
                       
                        <button onClick={()=>handleUp(item._id)} className='edibtn'>Edit</button>
                    </div>
                )
            })
        ):(
            <p>Loading Hotel data...</p>
        )}
       
      {/* Pagination */}
      <div className='pgbtn'>
                <button className='pgbtn2' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                {pageNumbers.map(number => (
                    <button className='pgbtn1' key={number} onClick={() => paginate(number)} disabled={currentPage === number ? 'active' : ''}>
                        {number}
                    </button>
                ))}
                <button className='pgbtn2' onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(vhotelData.length / hotelsPerPage)}>
                    Next
                </button>
            </div>
    </div>
  )
}

export default Viewhotel
