import { useState } from "react"

const Paginador = () => {

    const [sum, setSum] = useState(0);
    const [nums, setNums] = useState([1, 2, 3, 4]);

    function sumQuantity() {
        setSum(sum + 1);
        // setSum([...sum, sum.length + 1]);
    }

    function resQuantity() {
        setSum(sum - 1);
        //Solucionar esto
        // console.log(quitAnteriorNum)
        // const filterSumState = [...sum.map(e => e - 1)];
        // if (sum.length > 4) {
        //     setSum(filterSumState);
        // }
    }

    return (
        <div className="flex h-10 w-auto items-center">
            <button className="px-3 h-10 text-2xl" onClick={resQuantity}>-</button>
            { /* Con Bucle */}
            {nums.map((e, index) => {
                return (
                    <>
                        <div className="border-2 border-solid border-red-500 px-2">
                            <button key={index}>{e}</button>
                        </div>
                    </>

                )
            })
            }
            { /* Sin Buble */}
            {/* <div className="border-2 border-solid border-red-500 px-2">{sum + 1}</div>
            <div className="border-2 border-solid border-red-500 px-2">{sum + 2}</div>
            <div className="border-2 border-solid border-red-500 px-2">{sum + 3}</div>
            <div className="border-2 border-solid border-red-500 px-2">{sum + 4}</div>
            <div className="border-2 border-solid border-red-500 px-2">{sum + 5}</div> */}
            {/* {sum.map((e, index) => {
                return (
                    <div className="border-2 px-10 py-4 border-solid border-red-500" key={index}>
                        <p key={index}>{e}</p>
                    </div>
                )
            })} */}
            <button className="px-3 h-10 text-2xl" onClick={sumQuantity}>+</button>
        </div>
    )
}

export default Paginador
