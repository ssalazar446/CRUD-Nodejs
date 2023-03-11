const express = require('express')
const router = express.Router();

const pool = require('../database')

router.get('/add', (req, res) =>{
    res.render('paquetes/add');
});

router.post('/add', async (req, res) => {
    const { title, description } = req.body;
    const newPack = {
        title,
        description
    };
    await pool.query('INSERT INTO paquetes set ?', [newPack]);
    res.redirect('/links')
});

router.get('/', async (req, res) => {
    const paquetes = await pool.query('SELECT * FROM paquetes')
    console.log(paquetes);
    res.render('paquetes/list', {paquetes})
})
module.exports = router;