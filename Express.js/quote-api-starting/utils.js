const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const autor=(author)=>{
  let notas=[]
  quotes.forEach(x=>{
    if((x.person)==author){
      notas.push(x.quote)
    }
  })
  return notas
}



module.exports = {
  getRandomElement,autor
};
