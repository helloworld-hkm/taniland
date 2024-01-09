"use client"
import { useState, useEffect } from 'react';
const Footer = () => {
  const [accessCount, setAccessCount] = useState(0);

  useEffect(() => {
    // Fetch the access count from the API
    fetch('https://65920bac8cbbf8afa96c75fc.mockapi.io/visitor/1')
    .then((response) => response.json()) 
    .then((data) => {
        setAccessCount(data.count);
        console.log(accessCount);
        fetch('https://65920bac8cbbf8afa96c75fc.mockapi.io/visitor/1', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ count: data.count + 1 }), // Assuming there's only one item in the accessCount array
          })
          .then((response) => response.json())
          .then((data) =>  setAccessCount(data.count))
          .catch((error) => console.error('Error updating access count on the server:', error));
    
    })
      .catch((error) => console.error('Error fetching access count:', error));
       
  
  }, []);

//   const incrementAccessCount = () => {
//     fetch('https://my-json-server.typicode.com/helloworld-hkm/visitor/guest/1', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ count: accessCount[0].count + 1 }), // Assuming there's only one item in the accessCount array
//       })
//         .then((response) => response.json())
//         .then((data) => setAccessCount([data]))
//         .catch((error) => console.error('Error incrementing access count:', error));
//   };

  return (
    <div className="
      mt-0
      border-t-[1px]
      mb-2
    ">
      <div className="flex flex-col md:flex-row justify-between items-center mt-5 mx-4 ">
        <div>
          <div className="flex flex-col  cursor-pointer text-xl">
            <div>All rights reserved. @2024 by <span className="text-green-500">TaniLand</span>.</div>
          </div>
        </div>
        {/* {accessCount.map((item) => (
          <div key={item.id} className="text-slate-600 dark:text-slate-300" onClick={incrementAccessCount} style={{ cursor: 'pointer' }}>
            Halaman ini diakses {item.count} kali
          </div>
        ))} */}
        <div className="text-slate-600 dark:text-slate-300" style={{ cursor: 'pointer' }}>
          Halaman ini diakses {accessCount} kali
        </div>
      </div>
    </div>
  );
};

export default Footer;