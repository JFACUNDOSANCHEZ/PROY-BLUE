const {getAllPasseger} = require('./getAllPasseger.js');

const getForName = async (req, res)=> {
    const  name  = req.query.name;
 try {
        const passegers = await getAllPasseger()

 if (name) {
      const passegerFind = passegers.filter((pass) => pass.dni.toLowerCase().includes(name.toLowerCase()));
     
      if(passegerFind.length > 0){

          res.status(200).json(passegerFind);
        } else {
            res.status(444).send('No se encontro ese nombre');
        }
 } }
 catch (error) {
     res.status(500).send(error.message);
    }
}

module.exports ={ 
    getForName
}