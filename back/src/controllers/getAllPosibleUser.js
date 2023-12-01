const { PosibleUser }= require('../db.js')


const getAllPosibleUser = async (req, res) => {
try {
    const allPosibleUser = await PosibleUser.findAll()

res.status(200).json(allPosibleUser)

} catch (error) {
    res.status(404).json({ message: error.message })
}

}

module.exports={
getAllPosibleUser

}