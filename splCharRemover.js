const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
const splChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ";", "?"];

let abc = sentence;

for (let i = 0; i < splChar.length; i++) {
  abc = abc.replaceAll(splChar[i], "");
}

console.log(abc);
