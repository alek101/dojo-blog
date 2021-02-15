//sfc to create component
import { useState, useEffect} from 'react';
import BlogList from '../src/BlogList';

const Home4 = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoschi', id: 2},
        {title: 'My dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ]);

const handleDelete = (id,e) => {
    // e.target.parentElement.remove();
    // console.log('delete id: ',id);
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}

const [name, setName] =useState('mario');

//use effect call function when DOM is rerendered
//second argument, array, is dependancy, [] mean only run once, at first rendering
//in array we are setting states for wich when change we want to call use effect function
useEffect(()=>{
    console.log('use effect ran', blogs, name);
}, [name]);

const changeName =(name) => {
    setName(name);
}

return ( 
    <div className="home">
        <BlogList blogs={blogs} title="All titles" handleDelete={handleDelete}/>
        {/* <BlogList blogs={blogs.filter((blog)=>blog.author=='mario')} title="Mario's blogs"/> */}
        <button onClick={()=>changeName('luigi')}>Change Name</button>
        <p>{name}</p>
    </div>
    );
}

 
export default Home4;