import RouletteWheel from "./components/RouletteWheel/RouletteWheel";
import Board from "./components/Board/Board";
import BoardJetons from "./components/Jetons/BoardJetons";
import HandJetons from "./components/Jetons/HandJetons";


function App() {

  return (
    <section className="w-screen h-screen flex justify-center items-center flex-col hue-rotate-15 bg-dotted overflow-hidden">

      <h2 className="text-yellow-100 text-5xl mt-12 -mb-12 p-6 uppercase">Roulette</h2>

      <section className="flex flex-row justify-center items-center w-full h-full ">

        <RouletteWheel />
        <Board />
        <BoardJetons />
        <HandJetons />

      </section>

    </section>
  );
}

export default App;
