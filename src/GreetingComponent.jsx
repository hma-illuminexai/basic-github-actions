import { useState } from 'react';

const GreetingComponent = () => {
    const [isHello, setIsHello] = useState(true);

    const toggleGreeting = () => {
        setIsHello(!isHello);
    };

    return (
        <div>
            <button onClick={toggleGreeting}>Toggle Greeting</button>
            <h1>{isHello ? 'Hello' : 'Bye'}</h1>
        </div>
    );
};

export default GreetingComponent;