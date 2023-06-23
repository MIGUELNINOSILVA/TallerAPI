import app from './app.js';

const main = ()=>{
    app.listen(app.get('port'));
    console.log(`Te has conectado exitosamente al puerto ${app.get('port')}`);
}

main();