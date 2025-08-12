import { useState, useEffect } from "react";
import { encode, tokenizeWithSpecials } from "../lib/tokenizer";

// function for randomly coloring tokens
const getColor = (index) => {
  return `hsl(${(index * 40) % 360}, 95%, 85%)`;
};

export default function Home() {
  const [input, setInput] = useState("This is a sample text to be tokenized.");
  const [tokens, setTokens] = useState([]);
  const [ids, setIds] = useState([]);
  const [showWhitespace, setShowWhitespace] = useState(false);

  // Tokenization runs whenever the input changes
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
    <main className="flex flex-col min-h-screen p-4 sm:py-6 lg:py-8 bg-white text-gray-800">
      <div className="flex-grow max-w-5xl mx-auto w-full">
        {/* header */}
        <header className="flex justify-start items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Tokenization Visualizer
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1st column */}
          <div className="flex flex-col gap-4">
            <p className="text-md text-gray-600">
              Type text below to see it tokenized in real-time.
            </p>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your text here..."
              className="w-full h-64 p-3 font-mono text-sm bg-gray-50 border border-gray-300 rounded-md resize-y focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* 2nd column */}
          <div className="flex flex-col gap-4">
            {/* token count display */}
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold text-gray-600">Token count</h3>
              <p className="text-3xl font-bold text-gray-900">{ids.length}</p>
            </div>

            {/* tokens display */}
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 min-h-[120px]">
              <h3 className="block font-semibold text-gray-600 mb-1">
                Generated Tokens
              </h3>
              <div className="flex flex-wrap gap-1.5">
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

            {/* encoded tokens */}
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 break-words min-h-[120px]">
              <h3 className="font-semibold text-gray-600">Encoded Tokens</h3>
              <span className="font-mono text-sm text-gray-700">
                {ids.join(", ")}
              </span>
            </div>

            {/* show whitespaces toggle */}
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
      </div>

      {/* footer */}
      <footer className="text-center mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">
        Built by{" "}
        <a
          href="https://www.github.com/raaaghavv"
          className="text-blue-600 hover:underline"
        >
          raaaghavv
        </a>
      </footer>
    </main>
  );
}
