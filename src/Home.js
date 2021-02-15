// import { useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

//data: blogs, so grab data and call it blogs
const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');




//{blogs &&} so if left side, or blogs is null, than it false, and js is just ignore the one on the right
return ( 
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <p>Loading...</p>}
        {blogs && <BlogList blogs={blogs} title="All titles" />}
    </div>
    );
}

 
export default Home;