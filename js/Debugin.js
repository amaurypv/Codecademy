// // // Returns the string whose first letter is later in the alphabet.
// // // If both first letters are equal, returns null.
// // function getLaterFirstLetter(string1, string2) {
// //     const firstLetter1 = string1[0];
// //     const firstLetter2 = string2[0];
// //     if (firstLetter1 === firstLetter2) {
// //       return null;
// //     } else if (firstLetter1 > firstLetter2) {
// //       return string1;
// //     } else if (firstLetter1< firstLetter2){
// //       return string2;
// //     }
// //   }
  
// //   // Should return "blueberry"
// //   console.log(getLaterFirstLetter('avocado', 'blueberry'));
  
// //   // Should return "zebra"
// //   console.log(getLaterFirstLetter('zebra', 'aardvark'));
// //   // Should return null
// //   console.log(getLaterFirstLetter('astro', 'afar')) 

// // Returns whether or not the provided string contains a substring of "cake" in it.
// function containsCake(string) {
//   let arr=string.split(' ')
//   for(let x of arr){
//     if (x==='cake'){
//         return true
//     }
//   }return false
// }

// // // Should return true
// console.log(containsCake('I think cake is my soul mate.'))

// // // Should return false
// // console.log("containsCake('Pie is certainly the coolest dessert.') returns: " + containsCake('Pie is certainly the coolest dessert.'));


// function isStringPerfectLength(string, minLength, maxLength) {
//     const stringLength = string.length;
//     if (stringLength < minLength || stringLength > maxLength) {
//       return false;
//     }else{
//         return true
//     }    
//   }
  
//   // Should return true
//   console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));
  
//   // Should return false
//   console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));
  
//   // Should return false
//   console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
const adn1=['G', 'A', 'T', 'A','G', 'A', 'T', 'A','G', 'A', 'T', 'A','G', 'A', 'T'];
const adn2=['G', 'A', 'A', 'T','A', 'T', 'A','G', 'A', 'T', 'A','G', 'A', 'T','A'];
const bases=['G', 'A', 'T','C']
//adn1.length==adn2.length? console.log('true'):console.log('false')
const compara=(a,b)=>{
  let n=0
  for (let x=0;x<a.length;x++){
    if(a[x]==b[x]){
      n+=1
    }
  }
  return n
}

const cambia=(arr)=>{
  let nueva=[]
  let b=mockUpStrand()
  for (let x=0;x<arr.length;x++){
    let pro=[]
    if(arr[x]==b[x]){
      for(i of bases){
        if(i!=arr[x]){
          pro.push(i)
        }
      }
      nueva.push(pro[Math.floor(Math.random()*3)])
    }else{
      nueva.push(b[x])
    }
  }
  return nueva
}


cambia(adn1,adn2)

console.log(compara(adn1,adn2))