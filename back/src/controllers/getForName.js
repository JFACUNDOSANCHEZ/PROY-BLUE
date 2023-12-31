const {getAllPasseger} = require('./getAllPasseger.js');

const getForName = async (req, res)=> {
    const  name  = req.query.name;
 try {
        const passegers = await getAllPasseger()

        if (name) {
            const passengerFind = passegers.filter((pass) => {
                const dniMatch = pass.dni.toLowerCase().includes(name.toLowerCase());
                const nameMatch = pass.name.toLowerCase().includes(name.toLowerCase());
                return dniMatch || nameMatch;
            });
    

          res.status(200).json(passengerFind);
        } 
      
 }
 catch (error) {
     res.status(500).send(error.message);
    }
}

module.exports ={ 
    getForName
}