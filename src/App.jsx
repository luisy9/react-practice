import Circles from "./Circles";
import Cirlces2 from "./Cirlces2";
import Paginador from "./Paginador";

const App = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="flex justify-center items-center">
        {numbers.map((e, key) => {
          return (<Circles key={key} />)
        })}
      </div>
      <div className="flex justify-center items-center">
        {numbers.map((e, key) => {
          return (<Cirlces2 key={key} />)
        })}
      </div>
      <div className="flex justify-center">
        <Paginador />
      </div>
    </>
  );

}

export default App;