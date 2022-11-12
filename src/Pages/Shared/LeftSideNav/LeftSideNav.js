import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [Category, setCategory] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/news-category')
        .then( res => res.json())
        .then(data => setCategory(data));
    }, [])
    return (
        <div>
        <h4>All Category: {Category.length}</h4>
        <div>
            {
                Category.map(Category => <p key={Category.id}>
                    <Link to={`/catagory/${Category.id}`}>{Category.name}</Link>

                </p>)
            }
        </div>
        </div>
    );
};

export default LeftSideNav;



