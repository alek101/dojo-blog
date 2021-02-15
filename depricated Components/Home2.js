const Home2 = () => {

    const handelClick = (e) => {
        console.log('hello ninjas',e);
    }

    const handleClickAgain = (name,e) => {
        console.log('hello ' + name,e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handelClick}>Click me</button>
            <button onClick={(e)=>{handleClickAgain('Alek',e)}}>Click me Again</button>
        </div>
     );
}

 
export default Home2;