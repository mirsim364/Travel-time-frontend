import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './packagelist.css';

const UserPackage = () => {
    const [packages, setPackages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [packagesPerPage] = useState(1); // Change this value as needed

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/package/');
                setPackages(response.data.data);
            } catch (error) {
                console.error('Error fetching packages:', error);
            }
        };

        fetchPackages();
    }, []);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate startIndex and endIndex based on the current page
    const startIndex = (currentPage - 1) * packagesPerPage;
    const endIndex = startIndex + packagesPerPage;

    // Calculate total number of pages
    const totalPages = Math.ceil(packages.length / packagesPerPage);

    // Generate an array of natural numbers for pagination
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Create a subset of items for the current page
    const currentPackages = packages.slice(startIndex, endIndex);

    return (
        <div className='vie p-10'>
            <h2 className='vie1'>Package Details</h2>
            {currentPackages.length > 0 ? (
                currentPackages.map((item) => {
                    return (
                        <div className='vie2' key={item._id}>
                            <p><li> PACKAGE NAME: {item.packagename}</li></p>
                            <p> PLACE: {item.place}</p>
                            <p> PRICE: {item.price}</p>
                            <p> NUMBER OF DAY: {item.numberofday}</p>
                            <p> NUMBER OF PERSON: {item.numberofperson}</p>
                            <p> PHONE NUMBER: {item.phonenumber}</p>
                            <p> EMAIL: {item.email}</p>
                        </div>
                    );
                })
            ) : (
                <p>Loading package data...</p>
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
    );
};

export default UserPackage;
