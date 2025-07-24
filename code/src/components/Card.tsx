import React from 'react';

// type Props = {
//     count: number;
//     setCount: React.Dispatch<React.SetStateAction<number>>;
// };

interface IProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    onClick: (n1: number, n2: number) => number;
}

function Card({ count, setCount, onClick }: IProps) {
    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p
                onClick={() => {
                    console.log(onClick(23, 23));
                }}
            >
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
    );
}

export default Card;
