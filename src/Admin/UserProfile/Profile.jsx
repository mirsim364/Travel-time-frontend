import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Profile.css'
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const[adminData,setAdminData]=useState([]);
    const [error,setError]=useState(null);
    const[refresh,setRefresh]=useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [adminPerPage] = useState(10);
    const navigate=useNavigate()


    const handleDelete = async (id) =>{
        
        try{
          const response =await axios.delete(`http://localhost:5000/api/admin/${id}`)
          console.log('deleted user',response.data)
          alert('deleted')
          setRefresh(!refresh)
        }catch(err){
            if (err.response) {
          setError(err.response.data.message);
        } else {
            setError("An error occurred while deleting the user.");
        }
        }
      }
    
    let handleUp=(id)=>{
        navigate(`/admin/updateadmin/${id}`)
      }


    useEffect(()=>{
        const fetchadminData = async()=>{
            try{
                const response = await axios.get('http://localhost:5000/api/admin/');
                setAdminData(response.data.data);
            }catch(error){
                console.log(error);
            }
        };
        fetchadminData();
    },[refresh])
//Logic to paginate data
const indexOfLastAdmin = currentPage * adminPerPage;
const indexOfFirstAdmin = indexOfLastAdmin - adminPerPage;
const currentAdmins = adminData.slice(indexOfFirstAdmin, indexOfLastAdmin);

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

// Generate page numbers
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(adminData.length / adminPerPage); i++) {
    pageNumbers.push(i);
}
  return (
    <div className='view p-10'>
        <h2 className='view1'>User Details</h2>
        {currentAdmins && currentAdmins.length > 0 ?(
            currentAdmins.map((item)=>{
                return(
                    <div className='view2'>
                        <p>Username :{item.username}</p>
                        <p>Password :{item.password}</p>
                        <p>Email :{item.email}</p>

                        <button onClick={() => handleDelete(item._id)} className='delebtn'>Delete</button>
                        {error && <p>{error}</p>}


                        <button onClick={()=>handleUp(item._id)}className='edibtn'>Edit</button>
                        </div>
                )
            })

        ):(
            <p>Loading User data...</p>

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
                <button className='pgbt2' onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(adminData.length / adminPerPage)}>
                    Next
                </button>
            </div>
    </div>
  );
};

export default Profile
