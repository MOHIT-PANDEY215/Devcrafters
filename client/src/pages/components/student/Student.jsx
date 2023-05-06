import React, { useState, useEffect } from 'react';


const Student = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/students');
            const newData = await response.json();
            setData(newData);
        }

        fetchData();
    }, []);

    return (
        <ul>
            {data.map((item) => (
                <li key={item._id}>{item.name}</li>
            ))}
        </ul>
    );
}

export default Student




