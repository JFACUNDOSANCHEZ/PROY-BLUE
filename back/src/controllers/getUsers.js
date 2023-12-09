const {User} = require('../db.js')

const getallUser = async (req, res) => {
try {
    const allUser = await User.findAll()
 
res.status(200).json(allUser)
} catch (error) {
    res.status(404).json({ message: error.message })
}




}

module.exports={


    getallUser
}