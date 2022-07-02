const sentence = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;
let abc = sentence.split(" ");
for (let i = 0; i < abc.length; i++) {
  if (abc[i].length === 1) {
    abc.splice(i, 1);
  }
}
console.log(abc.length);
