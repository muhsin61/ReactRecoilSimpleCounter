import React from "react";

export default Decrease(){
    const [counter, setCounter] = useRecoilState(simpleCounter);

    return (
        <div>
            <button>Decrease</button>
        </div>
    )
}