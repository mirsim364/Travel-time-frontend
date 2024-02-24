import axios from 'axios';
import React, { useEffect, useState } from 'react'
import"./Adminguide.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Viewguide = () => {
    const [vguideData,setVguideData]=useState([]);
    const [error,setError]=useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [guidesPerPage] = useState(1);
    const [refresh,setRefresh]=useState(true);
    const navigate=useNavigate()

    const handleDelete = async (id) =>{
        
        try{
          const response =await axios.delete(`http://localhost:5000/api/guide/${id}`)
          console.log('deleted guide',response)
          toast.success('Deleted Successfully')
          setRefresh(!refresh)
        }catch(err){
            if (err.response) {
          setError(err.response.data.message);
        } else {
            setError("An error occurred while deleting the guide.");
        }
        }
      }
      let handleUp=(id)=>{
        navigate(`/admin/updateguide/${id}`)
      };

    useEffect(()=>{
        const fetchvguideData =async ()=>{
            try{
                const response =await axios.get('http://localhost:5000/api/guide/');
                setVguideData(response.data.data);
                console.log('guide',response);
            }catch(error){
                console.log(error);
            }
        };
        fetchvguideData();
        console.log('abcd',vguideData);
    },[refresh]);

    //Logic to paginate data
    const indexOfLastGuide = currentPage * guidesPerPage;
    const indexOfFirstGuide = indexOfLastGuide - guidesPerPage;
    const currentGuides = vguideData.slice(indexOfFirstGuide, indexOfLastGuide);
    
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(vguideData.length / guidesPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <div className='view p-10' >
        <h2 className='view1'>Guide Details</h2>
        {currentGuides.length > 0 ?(

            currentGuides.map((item)=>{
                return(
                    <div className='view2'>
                        <p> GUIDE NAME :{item.guidename}</p>
                        <p>PHONE NUMBER :{item.phonenumber}</p>
                        <p>EMAIL :{item.email}</p>
                        <p>PLACE:{item.place}</p>
                        <p>LANGUAGE:{item.language}</p>
                        <button onClick={() => handleDelete(item._id)} className='delebtn'>Delete</button>
                        {error && <p>{error}</p>}

                        <button onClick={()=>handleUp(item._id)} className='edibtn'>Edit</button>
                    </div>
                )
            })
        ):(
            <p>Loading guide data...</p>
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
                <button className='pgbt2' onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(vguideData.length / guidesPerPage)}>
                    Next
                </button>
            </div>
    </div>
  )
}

export default Viewguide
