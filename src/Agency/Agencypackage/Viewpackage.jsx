import axios from 'axios';
import React, { useEffect, useState } from 'react'
import"./AgencyPackage.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Viewpackage = () => {
    const [vpackageData,setVpackageData]=useState([]);
    const [error,setError]=useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [packagesPerPage] = useState(1); // Number of hotels per page
const[refresh,setRefresh]=useState(true)
const navigate=useNavigate()

    const handleDelete = async (id) =>{
        
        try{
          const response =await axios.delete(`http://localhost:5000/api/package/${id}`)
          console.log('deleted package',response)
          toast.success('Deleted Successfully')
          setRefresh(!refresh)
        }catch(err){
            if (err.response) {
          setError(err.response.data.message);
        } else {
            setError("An error occurred while deleting the package.");
        }
        }
      }
      let handleUp=(id)=>{
        navigate(`/agency/updatepackage/${id}`)
      }

    useEffect(()=>{
        const fetchvpackageData =async ()=>{
            try{
                const response =await axios.get('http://localhost:5000/api/package/');
                setVpackageData(response.data.data);
                console.log('package',response);
            }catch(error){
                console.log(error);
            }
        };
        fetchvpackageData();
        console.log('abcd',vpackageData);
    },[refresh]);
// Logic to paginate data
const indexOfLastPackage = currentPage * packagesPerPage;
const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
const currentPackages = vpackageData.slice(indexOfFirstPackage, indexOfLastPackage);

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

// Generate page numbers
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(vpackageData.length / packagesPerPage); i++) {
    pageNumbers.push(i);
}

  return (
    <div className='view p-10' >
        <h2 className='view1'>Package Details</h2>
        {currentPackages.length > 0 ?(

            currentPackages.map((item)=>{
                return(
                    <div className='view2'>
                        <p> PACKAGE NAME :{item.packagename}</p>
                        <p> PLACE :{item.place}</p>
                        <p> PRICE :{item.price}</p>
                        <p> NUMBER OF DAY:{item.numberofday}</p>
                        <p> NUMBER OF PERSON :{item.numberofperson}</p>
                        <p>PHONE NUMBER :{item.phonenumber}</p>
                        <p>EMAIL :{item.email}</p>

                        <button onClick={() => handleDelete(item._id)} className='delebtn'>Delete</button>
                        {error && <p>{error}</p>}

                       
                        <button onClick={()=>handleUp(item._id)}  className='edibtn'>Edit</button>
                    </div>
                )
            })
        ):(
            <p>Loading package data...</p>
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
                <button className='pgbtn2' onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(vpackageData.length / packagesPerPage)}>
                    Next
                </button>
            </div>
    </div>
  )
}

export default Viewpackage
