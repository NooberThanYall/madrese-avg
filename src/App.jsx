import { useState } from 'react'

//

const App = () => {
  const [values, setValues] = useState(["", "", "", "", "", "", "", ""]);
  const [avg, setAvg] = useState(0)

  function handleChange(i, e) {
    const newVal = [...values];
    newVal[i] = e.target.value;
    setValues(newVal);
  }

  function handleAvg() {
    const avg =
      values.reduce((prev, cur) => Number(prev) + Number(cur)) / values.length;

    setAvg(avg)
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-y-10">

      <h1 className="text-[55px] text-gray-800">به دیوانه خانه فجر خوش آمدید</h1>
      <div className="w-[600px] shadow-2xl rounded-lg bg-white flex h-[700px] p-4 flex-wrap gap-x-[90px]">
        <div className="flex flex-col justify-between gap-y-2">
          {values.map((val, i) => {
            return (
              <input
                key={i}
                type="number"
                className="h-16 p-4 border border-gray-500 rounded-md shadow-md text-xl"
                placeholder={`Number ${i + 1}`}
                value={val}
                onChange={(e) => handleChange(i, e)}
              />
            );
          })}
          <button
            className="bg-blue-500 text-white p-4 text-xl rounded-md hover:bg-blue-600 transition-all shadow-xl"
            onClick={() => handleAvg()}
          >
            Average Of 8
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-[70px] ml-6">{avg}</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
{
  /* <input
            type="number"
            className="h-16 p-4 border border-gray-500 rounded-md shadow-md"
            placeholder="Number 1"
          />
          <input
            type="number"
            className="h-16 p-4 border border-gray-500 rounded-md shadow-md"
            placeholder="Number 1"
          />
          <input
            type="number"
            className="h-16 p-4 border border-gray-500 rounded-md shadow-md"
            placeholder="Number 1"
          />
          <input
            type="number"
            className="h-16 p-4 border border-gray-500 rounded-md shadow-md"
            placeholder="Number 1"
          />
          <input
            type="number"
            className="h-16 p-4 border border-gray-500 rounded-md shadow-md"
            placeholder="Number 1"
          />
          <input
            type="number"
            className="h-16 p-4 border border-gray-500 rounded-md shadow-md"
            placeholder="Number 1"
          />
          <input
            type="number"
            className="h-16 p-4 border border-gray-500 rounded-md shadow-md"
            placeholder="Number 1"
          />
          <input
            type="number"
            className="h-16 p-4 border border-gray-500 rounded-md shadow-md"
            placeholder="Number 1"
          /> */
}
