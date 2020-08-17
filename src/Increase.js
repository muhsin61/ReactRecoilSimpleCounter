import React from "react";
import {simpleCounter} from "./Atoms"
import {useRecoilState} from "recoil"

export default function(){
    const [sayi,setSayi] = useRecoilState(simpleCounter)
    return(
        <div>
            <h1>naber</h1>
            <p>{sayi}</p>
        </div>
    )
}