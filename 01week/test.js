// your code here
let removeEWords = (sentence) => {
  //split the sentence into an array
  array = sentence.split(" ");
  output = [];
  //parse through each element in array, remove if E is found
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].length);

    for (let j = 0; j < array[i].length; j++) {
      if (!(array[i][j].toLowerCase() === 'e')) {
        output.push(array[i]);
      };

    };
  };
  return output;
}




console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
