const { BlackList, Passeger } = require('../db.js')

const postPasseger = async (req, res) => {
    try {
        const { name, dni, motivo } = req.body
        if (!name || !dni || !motivo) {
            res.status(400).send('Faltan Datos')
        } else {
            const passegerCrated = await Passeger.create({ name, dni, motivo });
          

            const [blackListRecord, created] = await BlackList.findOrCreate({
                where: { dni: dni }, 
                defaults: {
                    dni: dni, 
                    motivo: motivo,
                    name: name,
                    
                }
            });

            console.log(blackListRecord);
            await passegerCrated.setBlackList(blackListRecord);

            res.status(201).json(blackListRecord);
        }

    } catch (error) {
        res.status(404).json({ message: error.message })

    }


}
module.exports = {
    postPasseger
}