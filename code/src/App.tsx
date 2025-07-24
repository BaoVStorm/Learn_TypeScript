import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';

enum Degree {
    A1,
    A2,
    A3,
    B1,
    B2,
    B3,
}

interface People {
    name: string;
    age: number;
    male?: boolean;
}

interface Employee extends People {
    degree: Degree;
}

type Worker = People & {
    abc: number;
};

function App() {
    const [count, setCount] = useState<number>(0);
    const [people, setPeople] = useState<People>();

    useEffect(() => {
        setPeople({
            name: 'VStorm',
            age: 15,
        });
    }, []);

    // console.log(people);

    const employee: Employee = {
        name: 'VStorm',
        age: 18,
        degree: Degree.A1,
    };

    console.log(employee);

    const handleClick = (number1: number, number2: number): number => {
        return number1 + number2;
    };

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            {/* <div className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button>
                  <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                  </p>
                </div> */}
            <Card count={count} setCount={setCount} onClick={handleClick} />

            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
