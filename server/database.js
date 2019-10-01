
const mongoose=require('mongoose');

const URI='mongodb://localhost:27017/cafe';

mongoose.connect(URI,{useNewUrlParser:true, useUnifiedTopology:true},
    (err, resp) => {
        if (err) throw err;

        console.log('Base de datos online');
    });


module.exports=mongoose;