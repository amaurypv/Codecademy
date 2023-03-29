
// Look over the starter code. There are two helper functions: returnRandBase() and mockUpStrand().
// DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() 
// is called, it will randomly select a base and return the base ('A','T','C', or 'G').
// mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.
// You’ll use these helper functions later to create your objects that represent P. aequor.

// Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:
// The first parameter is a number (no two organisms should have the same number).
// The second parameter is an array of 15 DNA bases.
// pAequorFactory() should return an object that contains the properties specimenNum and 
// dna that correspond to the parameters provided.
// You’ll also add more methods to this returned object in the later steps.

// Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).
// To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().
// .mutate() is responsible for randomly selecting a base in the object’s 
// dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
// For example, if the randomly selected base is the 1st base and it is 'A', 
// the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.


// Your research team wants to be able to compare the DNA sequences of different P. aequor. 
// You’ll have to add a new method (.compareDNA()) to the returned object of the factory function.
// .compareDNA() has one parameter, another pAequor object.
// The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s
// .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, 
// but prints a message that states the percentage of DNA the two objects have in common —
// use the .specimenNum to identify which pAequor objects are being compared.
// For example:
// ex1 = ['A', 'C', 'T', 'G']
// ex2 = ['C', 'A', 'T', 'T']
// ex1 and ex2 only have the 3rd element in common ('T') and therefore, have 25% (1/4) of their DNA in common. 
// The resulting message would read something along the lines of: specimen #1 and specimen #2 have 25% DNA in common.

// P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.
// In the returned object of pAequorFactory(), add another method .willLikelySurvive().
// .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise,
// .willLikelySurvive() returns false


// Returns a random DNA base
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

const pAequorFactory=(num,arr)=>{
  return{
    specimenNum:num,
    dna:arr,
    mutate(){
      let nueva=[]
      let bases=['A', 'T', 'C', 'G']
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
    },
    compareDNA(){
      let n=0
      for (let x=0;x<arr.length;x++){
        if(arr[x]==this.mutate[x]){
          n+=1
        }
        console.log(n)
      }
    },
    willLikelySurvive(){
      let GoC=0
      for(let y of this.mutate()){
        if(y=='G'||y=='C'){
          GoC+=1
        }
      }
      if(GoC>=9){
        return true
      }else{
        return false
      }
    }
  }
}

const adn1=['G', 'A', 'T', 'A','G', 'A', 'T', 'A','G', 'A', 'T', 'A','G', 'A', 'T']


const ad1=pAequorFactory(2,adn1)
// console.log(ad1.dna)
// console.log(ad1.mutate())
console.log(ad1.willLikelySurvive())
