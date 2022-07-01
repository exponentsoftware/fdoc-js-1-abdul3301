const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";

const countWords = (paragraph, word1, word2) => {
  let words = paragraph.split(" ");
  console.log(words);
  let wordOneCount = 0;
  let wordTwoCount = 0;
  let result;
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() == word1.toLowerCase()) {
      wordOneCount++;
    }
    if (words[i].toLowerCase() == word2.toLowerCase()) {
      wordTwoCount++;
    }
  }
  if (wordOneCount === wordTwoCount) result = "both are equal";
  else if (wordOneCount > wordTwoCount) result = `${word1} is occured more`;
  else result = `${word2} occured more`;
  console.log(wordOneCount, wordTwoCount);

  return result;
};

console.log(countWords(paragraph, "if", "I"));
