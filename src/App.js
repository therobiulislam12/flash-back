import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
