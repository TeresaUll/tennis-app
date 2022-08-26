const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const Partido = require('../models/Partido');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('hello')
});

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({email, password});
    await newUser.save();
		const token = await jwt.sign({_id: newUser._id}, 'secretkey');
    res.status(200).json({token});
});

router.post('/createpartido', async (req, res) => {
    const { dia, mes, ano, hora, lugar, dificultad } = req.body;
    const newPartido = new Partido ({dia, mes, ano, hora, lugar, dificultad});
  
    await newPartido.save();
    return res.status(200).json(newPartido);
  })

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if (!user) return res.status(401).send('Este email no existe');
    if (user.password !== password) return res.status(401).send('Contraseña incorrecta');
    else{
		const token = jwt.sign({_id: user._id}, 'secretkey');
        return res.status(200).json({token})
    }
});


router.get('/uiu', (req, res) => {
    res.json([
        {
            _id: '1',
            name: "task one",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        }
    ])
});

router.get('/partidas', async (req, res) => {
    let partidas = await Partido.find()
    res.send(partidas);
  });


/*async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}*/



module.exports = router;