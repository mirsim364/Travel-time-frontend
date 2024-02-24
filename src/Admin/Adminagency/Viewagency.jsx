import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./AdminAgency.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Viewagency = () => {
    const [vagencyData,setVagencyData]=useState([]);
    const [error,setError]=useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [agenciesPerPage] = useState(1); // Number of hotels per page
const [refresh,setRefresh]=useState(true)
const navigate=useNavigate()

    const handleDelete = async (id) =>{
        
        try{
          const response =await axios.delete(`http://localhost:5000/api/agency/${id}`)
          console.log('deleted agency',response)
          toast.success('Deleted Successfully' )
          setRefresh(!refresh)
        }catch(err){
            if (err.response) {
          setError(err.response.data.message);
        } else {
            setError("An error occurred while deleting the agency.");
        }
        }
      }
    
        let handleUp=(id)=>{
        navigate(`/admin/updateagency/${id}`)
      };

    useEffect(()=>{
        const fetchvagencyData =async ()=>{
            try{
                const response =await axios.get('http://localhost:5000/api/agency/');
                setVagencyData(response.data.data);
                console.log('agency',response);
            }catch(error){
                console.log(error);
            }
        };
        fetchvagencyData();
        console.log('abcd',vagencyData);
    },[refresh]);

// Logic to paginate data
const indexOfLastAgency = currentPage * agenciesPerPage;
const indexOfFirstAgency = indexOfLastAgency - agenciesPerPage;
const currentAgencies = vagencyData.slice(indexOfFirstAgency, indexOfLastAgency);

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

// Generate page numbers
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(vagencyData.length / agenciesPerPage); i++) {
    pageNumbers.push(i);
}
  return (
    <div className='view p-10'>
        <h2 className='view1'>Agency Details</h2>
        {currentAgencies.length > 0 ?(

            currentAgencies.map((item)=>{
                return(
                    <div className='view2'>
                        <p> AGENCY NAME :{item.agencyname}</p>
                        <p>PHONE NUMBER :{item.phonenumber}</p>
                        <p>EMAIL :{item.email}</p>
                        <p>PASSWORD :{item.password}</p>
                        {/* <button onClick={handleDelete}className='delebtn'>Delete</button>*/}
                        <button onClick={() => handleDelete(item._id)} className='delebtn'>Delete</button> 
{error && <p>{error}</p>}
                        <button  onClick={()=>handleUp(item._id)}className='edibtn'>Edit</button>
                    </div>
                )
            })
        ):(
            <p>Loading agency data...</p>
        )}
      {/* Pagination */}
      <div className='pgbtn'>
                <button className='pgbt2' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                {pageNumbers.map(number => (
                    <button className='pgbt1' key={number} onClick={() => paginate(number)} disabled={currentPage === number ? 'active' : ''}>
                        {number}
                    </button>
                ))}
                <button className='pgbt2' onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(vagencyData.length / agenciesPerPage)}>
                    Next
                </button>
            </div>
    </div>
  )
}

export default Viewagency
