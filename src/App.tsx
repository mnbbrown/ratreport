import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <div className="text-center">
          <h1 className="text-2xl">Report a RAT</h1>
          <span className="text-sm">
            Report your RAT (Rapid Antigen Test) result
          </span>
        </div>
        <div className="mt-16 p-6 w-full text-center bg-orange-400 text-orange-900 rounded-md font-semibold">
          <div className="text-4xl">32,000</div>
          <div className="text-sm">positive</div>
        </div>
        <div className="mb-16 text-sm text-center mt-4">
          1,000 negative. <br />
          96.9% case positivity rate. <br />
          History coming soon
        </div>
        <div className="text-center">
          <Link to="/report">Report your result &rarr;</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
