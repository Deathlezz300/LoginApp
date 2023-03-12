import 'whatwg-fetch';
import 'setimmediate';

require('dotenv').config({
    path:'.env.test'
});

jest.mock('./src/Helpers/Enviroments.js',()=>{
    getEnviroments:()=>({...process.env})
});

//configuar las variables de entorno en el testing