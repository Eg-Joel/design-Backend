const { getData, createData } = require("../controllers/userController");

const router = require("express").Router()

router.get('/getData',getData)

router.post('/createData',createData)

module.exports = router;