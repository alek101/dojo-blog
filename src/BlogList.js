import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {

    //this would requre = (props) above
    // const blogs= props.blogs;
    // const title= props.title;

    return ( 
        <div className="blog-list">
            <h2> {title} </h2>
            { blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2> {blog.title} </h2>
                    </Link>
                    <p> Written by {blog.author} </p>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;