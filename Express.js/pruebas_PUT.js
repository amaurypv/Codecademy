const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const currencies = {
  diram: {
    countries: ['UAE', 'Morocco'],
  },
  real: {
    countries: ['Brazil'],
  },
  dinar: {
    countries: ['Algeria', 'Bahrain', 'Jordan', 'Kuwait'],
  },
  vatu: {
    countries: ['Vanuatu'],
  },
  shilling: {
    countries: ['Tanzania', 'Uganda', 'Somalia', 'Kenya'],
  },
};
//app.put se usa para poner en el array countries de currencies el valor de countries que le pasamos por query
app.put('/currencies/:name/countries', (req, res, next) => {
    const currencyName = req.params.name; //seleccionamos el nombre de la moneda
    const countries = req.query;  //solo se toma req.query porque asi se toma todo el objeto.
    currencies[currencyName] = countries;
    res.send(currencies[currencyName]);
});
  
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


