import { useState } from "react"

const Paginador = () => {

    const [sum, setSum] = useState([1, 2, 3, 4]);
    function sumQuantity() {
        setSum([...sum, sum.length + 1]);
    }

    function resQuantity() {
        //Solucionar esto
        // const quitAnteriorNum = [...sum.filter(e => (sum[0] !== 1) || (sum[0 < 1]))];
        // console.log(quitAnteriorNum)
        const filterSumState = [...sum.map(e => e - 1)];
        if(sum.length > 4){
            setSum(filterSumState);
        }
    }

    return (
        <div className="flex h-10 w-auto items-center">
            <button className="px-3 h-10 text-2xl" onClick={resQuantity}>-</button>
            {sum.map((e, index) => {
                return (
                    <div className="border-2 px-10 py-4 border-solid border-red-500" key={index}>
                        <p key={index}>{e}</p>
                    </div>
                )
            })}
            <button className="px-3 h-10 text-2xl" onClick={sumQuantity}>+</button>
        </div>
    )
}

export default Paginador
