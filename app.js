const express = require('express');
const app = express();
const cors = require('cors');

const states = [
    { state: 'Abia State', capital: 'Umuahia' },
    { state: 'Adamawa State', capital: 'Yola' },
    { state: 'Akwa Ibom', capital: 'Uyo' },
    { state: 'Anambra State', capital: 'Awka' },
    { state: 'Bauchi State', capital: 'Bauchi' },
    { state: 'Bayelsa State', capital: 'Yenagoa' },
    { state: 'Benue State', capital: 'Makurdi' },
    { state: 'Borno State', capital: 'Maiduguri' },
    { state: 'Cross River State', capital: 'Calabar' },
    { state: 'Delta State', capital: 'Asaba' },
    { state: 'Ebonyi State', capital: 'Abakaliki' },
    { state: 'Edo State', capital: 'Benin City' },
    { state: 'Ekiti State', capital: 'Ado - Ekiti' },
    { state: 'Enugu State', capital: 'Enugu' },
    { state: 'Gombe State', capital: 'Gombe' },
    { state: 'Imo State', capital: 'Owerri' },
    { state: 'Jigawa State', capital: 'Dutse' },
    { state: 'Kaduna State', capital: 'Kaduna' },
    { state: 'Kano State', capital: 'Kano' },
    { state: 'Katsina State', capital: 'Katsina' },
    { state: 'Kebbi State', capital: 'Birnin Kebbi' },
    { state: 'Kogi State', capital: 'Lokoja' },
    { state: 'Kwara State', capital: 'Ilorin' },
    { state: 'Lagos State', capital: 'Ikeja' },
    { state: 'Nasarawa State', capital: 'Lafia' },
    { state: 'Niger State', capital: 'Minna' },
    { state: 'Ogun State', capital: 'Abeokuta' },
    { state: 'Ondo State', capital: 'Akure' },
    { state: 'Osun State', capital: 'Oshogbo' },
    { state: 'Oyo State', capital: 'Ibadan' },
    { state: 'Plateau State', capital: 'Jos' },
    { state: 'Rivers State', capital: 'Port Harcourt' },
    { state: 'Sokoto State', capital: 'Sokoto' },
    { state: 'Taraba State', capital: 'Jalingo' },
    { state: 'Yobe State', capital: 'Damaturu' },
    { state: 'Zamfara State', capital: 'Gusau' },
    { state: 'Abuja', capital: 'FCT' }
];

app.use(cors());

app.get('/', (req, res) => {
    res.json(states);
});

app.listen(process.env.PORT, () => {
    console.log('Listening');
});

