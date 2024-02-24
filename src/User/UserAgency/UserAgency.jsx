import axios from 'axios';
import React, { useEffect, useState } from 'react'


const UserAgency = () => {
    const [agencies,setAgencies]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [agenciesPerPage] = useState(5); // Change this value as needed




    useEffect(()=>{
        const fetchAgencies = async () => {
            try {
              const response = await axios.get('http://localhost:5000/api/agency/'); 
              console.log(response.data.data);
              setAgencies(response.data.data);
              console.log(agencies);
              
            } catch (error) {
              console.error('Error fetching agencies:', error);
            }
          };
      
          fetchAgencies();
        }, []);

        const paginate = (pageNumber) => {
          setCurrentPage(pageNumber);
      };
     // Calculate startIndex and endIndex based on the current page
     const startIndex = (currentPage - 1) * agenciesPerPage;
     const endIndex = startIndex + agenciesPerPage;
 
     // Calculate total number of pages
     const totalPages = Math.ceil(agencies.length / agenciesPerPage);
 
     // Generate an array of natural numbers for pagination
     const pageNumbers = [];
     for (let i = 1; i <= totalPages; i++) {
         pageNumbers.push(i);
     }
 
     // Create a subset of items for the current page
     const currentAgencies = agencies.slice(startIndex, endIndex);
 


  return (
    <div className='vie p-10' >
        <h2 className='vie1'>Agency Details</h2>
        {agencies.length > 0 ?(

            agencies.map((item)=>{
                return(
                    <div className='vie2'>
                        
                      <p> <li> AGENCY NAME :{item.agencyname}</li></p>
                        <p>PHONE NUMBER :{item.phonenumber}</p>
                        <p>EMAIL :{item.email}</p>
                    </div>
                )
            })
        ):(
            <p>Loading agency data...</p>
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

export default UserAgency
