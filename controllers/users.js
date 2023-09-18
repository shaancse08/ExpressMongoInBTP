const getAllUsers = async (req, res) => {
    res.send({message: "Users Controller hit" })
}


module.exports = {
    getAllUsers
}