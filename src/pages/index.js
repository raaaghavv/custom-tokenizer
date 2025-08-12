import { useState, useEffect } from "react";
// Assuming these functions exist and work in your project
import { encode, tokenizeWithSpecials } from "../lib/tokenizer";

// Helper function for coloring tokens
const getColor = (index) => {
  return `hsl(${(index * 40) % 360}, 95%, 85%)`;
};

export default function Home() {
  const [input, setInput] = useState("This is a sample text to be tokenized.");
  const [tokens, setTokens] = useState([]);
  const [ids, setIds] = useState([]);
  const [showWhitespace, setShowWhitespace] = useState(false);

  // Tokenization runs automatically whenever the input changes
  useEffect(() => {
    const toks = tokenizeWithSpecials(input);
    const tokenIds = encode(input);
    setTokens(toks);
    setIds(tokenIds);
  }, [input]);

  const renderToken = (token) => {
    if (showWhitespace) {
      // Replace spaces with a middle dot for visibility
      return token.replace(/ /g, "·");
    }
    return token;
  };

  return (
    // STEP 1: Add flex, flex-col, and min-h-screen here
    <main className="flex flex-col min-h-screen p-4 sm:p-6 lg:p-8 bg-white text-gray-800">
      {/* STEP 2: Add flex-grow to a new wrapper div around your main content */}
      <div className="flex-grow max-w-5xl mx-auto w-full">
        <header className="flex justify-start items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Tiktokenizer</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* --- Left Column --- */}
          <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-600">
              Type text below to see it tokenized in real-time.
            </p>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your text here..."
              className="w-full h-64 p-3 font-mono text-sm bg-gray-50 border border-gray-300 rounded-md resize-y focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* --- Right Column --- */}
          <div className="flex flex-col gap-4">
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold text-gray-600">Token count</h3>
              <p className="text-3xl font-bold text-gray-900">{ids.length}</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 min-h-[120px]">
              <div className="flex flex-wrap gap-1">
                {tokens.map((tok, idx) => (
                  <span
                    key={idx}
                    className="px-1.5 py-0.5 rounded-md text-black"
                    style={{ backgroundColor: getColor(idx) }}
                  >
                    {renderToken(tok)}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 font-mono text-sm text-gray-700 break-words min-h-[120px]">
              {ids.join(", ")}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="whitespace"
                checked={showWhitespace}
                onChange={(e) => setShowWhitespace(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="whitespace"
                className="ml-2 block text-sm text-gray-800"
              >
                Show whitespace
              </label>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* End of the new flex-grow wrapper */}
      <footer className="text-center mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">
        Built by{" "}
        <a
          href="https://www.github.com/raaaghavv"
          className="text-blue-600 hover:underline"
        >
          raghav
        </a>
      </footer>
    </main>
  );
}
