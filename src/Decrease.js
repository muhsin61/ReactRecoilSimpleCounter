import React from "react";
import './App.css';
import { simpleCounter } from "./Atoms";
import { useRecoilState } from "recoil";

export default function () {
    const [number, setNumber] = useRecoilState(simpleCounter);
    return (
        <div>
            <button onClick={() => setNumber(number - 1)}>Decrease</button>
        </div>
    )
}