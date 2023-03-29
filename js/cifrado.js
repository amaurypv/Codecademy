/*
A shift cipher takes a plain text message and shifts each letter forward in the alphabet 
by a given number. For example, a shift cipher with a shift of 1 would turn the string 
'hello' to 'ifmmp'.

Create a class ShiftCipher that takes the numerical value of the shift as a constructor 
parameter. The class should have two methods:

encrypt: takes a plain text string and returns a capitalized string with each letter shifted
forward in the alphabet based on the set shift value.
decrypt: takes an encrypted message and returns a lower case string with each letter shifted
back in the alphabet based on the set shift value.
In both methods, any character outside the alphabet should remain the same.
But if a character is shifted outside the alphabet in either direction it should be wrapped 
around to the other side. For example, encrypting a y with a shift of 4 results in C and 
decrypting an A with a shift of 1 result in z.
Example:
const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'*/

class ShiftCipher {
    constructor (shift){
        this.shift=shift
    }
    encrypt(frase){
        let cod=[]
        const abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        let frase2=frase.toLowerCase()
        for(let i=0;i<frase2.length;i++){
            if(abc.includes(frase2[i])){
                let var1=abc.indexOf(frase2[i])+this.shift
                if(var1>=26){
                    let maxi= abc.indexOf(frase2[i])-this.shift-24
                    cod.push(maxi)
                }else
                    cod.push(var1)
            }else{
                cod.push(frase2[i])
            }
        }   
        let cod2=[]
        for (let j=0;j<cod.length;j++){
            if(typeof(cod[j])==='string'){
                cod2.push(cod[j])
            }else{
                let letra=abc[cod[j]]
                cod2.push(letra)
            }
        }
        let desci=cod2.join('')
        return desci.toUpperCase()
      
    }
    decrypt(frase){
        let decod=[]
        const abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        let minus=frase.toLowerCase();
        for(let i=0;i<minus.length;i++){
            if(abc.includes(minus[i])){
                let var1=abc.indexOf(minus[i])-this.shift
                if (var1<0){
                    let neg=abc.indexOf(minus[i])+26-this.shift
                    decod.push(neg)
                }
                else{
                    decod.push(var1)
                }
            }else{
                decod.push(minus[i])
            }
        }
        let decod2=[]
        for(let j=0;j<decod.length;j++){
            if(typeof(decod[j])==='string'){
                decod2.push(decod[j])
            }else{
                let letter=abc[decod[j]]
                decod2.push(letter)
            }
        }
        return (decod2.join(''))
    }        
}

// const cipher = new ShiftCipher(19);
// console.log(cipher.encrypt('abcdefg'));


const encrypt=(frase,n)=>{
    let cod=[]
    const abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let frase2=frase.toLowerCase()
    for(let i=0;i<frase2.length;i++){
        if(abc.includes(frase2[i])){
            let mod=n%abc.length
            let pos=abc.indexOf(frase2[i])+mod
            if(pos>25){
                pos2=abc.indexOf(frase2[i])-mod+24
                cod.push(pos2)
            }else{
            cod.push(pos)
            }
        }
        else{
            cod.push(frase2[i])
        }
    }    
        let cod2=[]
        for (let j=0;j<cod.length;j++){
                if(typeof(cod[j])==='string'){
                        cod2.push(cod[j])
                    }else{
                            let letra=abc[cod[j]]
                            cod2.push(letra)
                        }
                    }
                    let desci=cod2.join('')
                    return desci.toUpperCase()
                
                }
                
                
console.log(encrypt('abcdefg',25))
                
                