import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = () => {
    const[agencyData,setAgencyData]=useState([]);
    const [updatedData, setUpdatedData] = useState({});

    const handleUpdate = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/agency/${id}`, updatedData);
            console.log('Updated agency:', response.data);
            toast.success('Updated Successfully')
            e.target.reset()
        } catch (error) {
            console.error('Error updating agency:', error);
          
        }
    };

    useEffect(()=>{
        const fetchagencyData = async()=>{
            try{
                const response = await axios.get('http://localhost:5000/api/admin/');
                setAgencyData(response.data.data);
            }catch(error){
                console.log(error);
            }
        };
        fetchagencyData();
    },[])

  return (
    <div className='view p-10'>
        <h2 className='view1'>Agency Profile</h2>
        {agencyData && agencyData.length > 0 ?(
            agencyData.map((item)=>{
                return(
                    <div className='view2'>
                        <p>Username :{item.username}</p>
                        <p>Password :{item.password}</p>
                        <p>Email :{item.email}</p>

                        <button  onClick={handleUpdate}className='edibtn'>Edit</button>
                        </div>
                )
            })

        ):(
            <p>Loading Agency data...</p>

        )}
      
    </div>
  );
};

export default Profile
