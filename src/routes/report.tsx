import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Report() {
  const [result, setResult] = useState<boolean | undefined>(undefined);
  const [testDate, setTestDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  );

  const [postcode, setPostcode] = useState<string>("");
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold">Report a RAT</h1>
          <span className="text-gray-600 mt-2">
            Report your RAT (Rapid Antigen Test) result.
          </span>
        </div>
        <label className="block">
          <span className="text-gray-600">When did you take the test?*</span>
          <input
            type="date"
            className="block w-full rounded"
            value={testDate}
            onChange={(e) => setTestDate(e.target.value)}
          />
        </label>
        <label className="block mt-6">
          <span className="text-gray-600">
            Was your test positive or negative?
          </span>
          <div className="flex mt-1">
            <div
              role="button"
              className={clsx(
                "p-4 flex-1 text-center rounded pointer mr-1 cursor-pointer",
                {
                  "border border-gray-500 hover:bg-gray-200": result !== true,
                  "bg-red-500 border border-red-500": result === true,
                }
              )}
              onClick={() => setResult(true)}
            >
              Positive
            </div>
            <div
              role="button"
              onClick={() => setResult(false)}
              className={clsx(
                "p-4 flex-1 text-center rounded pointer mr-1 cursor-pointer",
                {
                  "border border-gray-500 hover:bg-gray-200": result !== false,
                  "bg-green-400 border-green-400 border": result === false,
                }
              )}
            >
              Negative
            </div>
          </div>
        </label>
        <label className="block mt-6">
          <span className="text-gray-600">What is your postcode?</span>
          <input
            type="text"
            className="block w-full rounded"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
        </label>
        <div className="block mt-6">
          <button
            disabled={result === undefined || testDate === undefined}
            type="submit"
            className="block w-full p-2 rounded hover:bg-gray-500 text-white bg-gray-600"
          >
            Submit
          </button>
        </div>
        <div className="text-center mt-12">
          <Link to="/">&larr; Back to data</Link>
        </div>
      </div>
    </div>
  );
}
