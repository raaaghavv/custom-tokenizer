import { tokenToId, idToToken } from "./vocab";

export function tokenizeWithSpecials(text) {
  let tokens = ["<SOS>"];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === " ") {
      tokens.push(" ");
    } else if (char === "," || char === ".") {
      tokens.push(char);
      if (text[i + 1] === " ") {
        tokens.push(" ");
        i++;
      }
    } else {
      let word = "";
      while (i < text.length && ![" ", ",", "."].includes(text[i])) {
        word += text[i];
        i++;
      }
      i--;
      tokens.push(word);
    }
  }

  tokens.push("<EOS>");
  return tokens;
}

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

export function decode(ids) {
  return ids
    .map((id) => idToToken[id] ?? "<UNK>")
    .filter((t) => t !== "<PAD>" && t !== "<SOS>" && t !== "<EOS>")
    .map((t) => (t === " " ? " " : t))
    .join("");
}