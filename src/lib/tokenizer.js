import { tokenToId, idToToken } from "./vocab";

// tokenizing function add start and end header to the input string
export function tokenizeWithSpecials(text) {
  // adds start header to the input string
  let tokens = ["<SOS>"];
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    // if  char is a punctuation
    if (char === " ") {
      tokens.push(" ");
    } else if (char === "," || char === ".") {
      tokens.push(char);
      if (text[i + 1] === " ") {
        tokens.push(" ");
        i++;
      }
    } 
    // if char is not a punctuation and might form a word.
    else {
      let word = "";
      while (i < text.length && ![" ", ",", "."].includes(text[i])) {
        word += text[i];
        i++;
      }
      i--;
      tokens.push(word);
    }
  }
  
  // adds end header to the input string
  tokens.push("<EOS>");
  return tokens;
}

// encode function to generate unique id for tokens
export function encode(text) {
  const tokens = tokenizeWithSpecials(text);

  tokens.forEach((token) => {
    if (!(token in tokenToId)) {
      const newId = Object.keys(tokenToId).length;
      tokenToId[token] = newId;
      idToToken[newId] = token;
    }
  });

  return tokens.map((token) => tokenToId[token] ?? tokenToId["<UNK>"]);
}

// decode function to return token for respective unique id
export function decode(ids) {
  return ids
    .map((id) => idToToken[id] ?? "<UNK>")
    .filter((t) => t !== "<PAD>" && t !== "<SOS>" && t !== "<EOS>")
    .map((t) => (t === " " ? " " : t))
    .join("");
}