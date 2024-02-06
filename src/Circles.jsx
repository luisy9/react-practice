import { useState } from "react"

const Circles = () => {
    const [color, setColor] = useState('red');

    function changeColor() {
        if (color === 'red') {
            setColor('green');
        } else {
            setColor('red');
        }
    }

    return (
        <>
            <button onClick={changeColor} className="px-10 ">
                <div className="w-20 m-5 cursor-pointer text-transparent" style={{ backgroundColor: color }}>
                    dasdadasd
                </div>
            </button>
        </>
    )
}
export default Circles
