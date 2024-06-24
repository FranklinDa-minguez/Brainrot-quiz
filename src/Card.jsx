const Card = ({Front, Back, setCurr, curr}) => {

    const Switch = () => {
        setCurr(!curr)
    }

    return (
        <>
            <div onClick = {Switch} className="flex justify-center border-black border h-2/5 w-1/3 text-center">
                {
                    curr? (<p className=" m-auto">{Front}</p>): (<p className=" m-auto">{Back}</p>)
                }
            </div>
        </>
    )
}

export default Card