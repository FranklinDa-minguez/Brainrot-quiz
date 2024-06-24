import { useState } from "react"
import Card from "./Card"
import brainrot from "./brainrot"


const Cards = () => {

    const [curr, setCurr] = useState(true)
    const [index, setindex] = useState(0)

    const nextquestion = () => {
        if(index < brainrot.length - 1) {
            setindex(index + 1)
            setCurr(true)
            console.log(curr)
        }
    }

    const prevquestion = () => {
        if(index > 0) {
            setindex(index - 1)
            setCurr(true)
            console.log(curr)
        }
    }

    return (
        <>
            <Card Front = {brainrot[index].Front} Back = {brainrot[index].Back} setCurr = {setCurr} curr = {curr}/>
            <div className=" flex gap-2">
                <button  onClick = {prevquestion} className="bg-black text-white p-2 rounded-md">prev</button>
                <button  onClick = {nextquestion} className="bg-black text-white p-2 rounded-md">next</button>
            </div>    
        </>

    )

}

export default Cards