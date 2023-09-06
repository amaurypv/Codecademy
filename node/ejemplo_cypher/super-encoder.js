// Import the encryptors functions here.

const {caesarCipher,symbolCipher,reverseCipher}=require('./encryptors')
/*
Use the three encryption methods to complete the encodeMessage() 
function by passing the input str parameter into one encryption function and then
passing the returned value to the next encryption function. encodeMessage() 
should return the final encoded message.

Some guidelines:

You must use each encryption function at least once.
It is your choice what order you use to call the encryption functions.
You may also re-use encryption functions to encode the message.
caesarCipher() requires an amount argument. Choose some number between 0 and 26
to use for this argument and remember your choice for decodeMessage().
When you are finished, try running the program like so:
*/
const encodeMessage = (str) => {
    // Use the encryptor functions here.
    return caesarCipher(reverseCipher((str)),6)
  }
  
const decodeMessage = (str) => {
    // Use the encryptor functions here.
  return reverseCipher((caesarCipher(str,-6)))
}
  
// User input / output.
  
const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
     output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
} 
    
process.stdout.write(output + '\n');
process.exit();
}
  
  // Run the program.
  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  process.stdin.on('data', handleInput);