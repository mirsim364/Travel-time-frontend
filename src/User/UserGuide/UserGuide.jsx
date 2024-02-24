import axios from 'axios';
import React, { useEffect, useState } from 'react'


const UserGuide = () => {
    const [guides,setGuides]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [guidesPerPage] = useState(5); // Change this value as needed



    useEffect(()=>{
        const fetchGuides = async () => {
            try {
              const response = await axios.get('http://localhost:5000/api/guide/'); 
              console.log(response.data.data);
              setGuides(response.data.data);
              
            } catch (error) {
              console.error('Error fetching guides:', error);
            }
          };
      
          fetchGuides();
        }, []);
        const paginate = (pageNumber) => {
          setCurrentPage(pageNumber);
      };
  
      // Calculate startIndex and endIndex based on the current page
      const startIndex = (currentPage - 1) * guidesPerPage;
      const endIndex = startIndex + guidesPerPage;
  
      // Calculate total number of pages
      const totalPages = Math.ceil(guides.length / guidesPerPage);
  
      // Generate an array of natural numbers for pagination
      const pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
      }
  
      // Create a subset of items for the current page
      const currentGuides = guides.slice(startIndex, endIndex);
  



  return (
    <div className='vie p-10' >
        <h2 className='vie1'>Guide Details</h2>
        {guides.length > 0 ?(

            guides.map((item)=>{
                return(
                    <div className='vie2'>
                        
                        <p><li> GUIDE NAME :{item.guidename}</li></p>
                        <p>PHONE NUMBER :{item.phonenumber}</p>
                        <p>EMAIL :{item.email}</p>
                        <p>PLACE:{item.place}</p>
                        <p>LANGUAGE:{item.language}</p>
                    </div>
                )
            })
        ):(
            <p>Loading guide data...</p>
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

export default UserGuide
