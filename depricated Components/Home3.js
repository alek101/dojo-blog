import { useState} from 'react';

const Home3 = () => {

    // let name='Alek';
    const [name, setName] = useState('Alek');
    const [age, setAge] = useState(33);

    const handelClick = (e) => {
        setName('Luigi');
        setAge(25);
    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old!</p>
            <button onClick={handelClick}>Click me</button>
        </div>
     );
}

 
export default Home3;