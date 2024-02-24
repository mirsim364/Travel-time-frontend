import axios from 'axios';
import React, { useEffect, useState } from 'react'


const UserHotel = () => {
    const [hotels,setHotels]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hotelsPerPage] = useState(5); // Change this value as needed



    useEffect(()=>{
        const fetchhotels = async () => {
            try {
              const response = await axios.get('http://localhost:5000/api/hotel/'); 
              console.log(response.data.data);
              setHotels(response.data.data);
              
            } catch (error) {
              console.error('Error fetching hotels:', error);
            }
          };
      
          fetchhotels();
        }, []);
        const paginate = (pageNumber) => {
          setCurrentPage(pageNumber);
      };
  
      // Calculate startIndex and endIndex based on the current page
      const startIndex = (currentPage - 1) * hotelsPerPage;
      const endIndex = startIndex + hotelsPerPage;
  
      // Calculate total number of pages
      const totalPages = Math.ceil(hotels.length / hotelsPerPage);
  
      // Generate an array of natural numbers for pagination
      const pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
      }
  
      // Create a subset of items for the current page
      const currentHotels = hotels.slice(startIndex, endIndex);
  


  return (
    <div className='vie p-10' >
        <h2 className='vie1'>Hotel Details</h2>
        {hotels.length > 0 ?(

            hotels.map((item)=>{
                return(
                    <div className='vie2'>
                        <p><li>HOTEL NAME   :{item.hotelname}</li></p>
                        <p>PHONE NUMBER :{item.phonenumber}</p>
                        <p>EMAIL       :{item.email}</p>
                        <p>ADDRESS     :{item.address}</p>
                        <p>SERVICE     :{item.service}</p>
                       
                    </div>
                )
            })
        ):(
            <p>Loading hotel data...</p>
        )}
       {/* Pagination controls with natural numbers */}
       <div className='pgbtn'>
                <button className='pgbutton' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                {pageNumbers.map((number) => (
                    <button className='pgbutton1' key={number} onClick={() => paginate(number)} disabled={number === currentPage}>{number}</button>
                ))}
                <button className='pgbutton' onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>
    </div>
  )
}

export default UserHotel
