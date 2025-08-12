export let tokenToId = {
  "<SOS>": 0,
  "<EOS>": 1,
  "<PAD>": 2,
  "<UNK>": 3,
  " ": 4,
  ".": 5,
  ",": 6,
};

// reverse [key:value] Object for quicker decoding
export let idToToken = Object.fromEntries(
  Object.entries(tokenToId).map(([token, id]) => [id, token])
);