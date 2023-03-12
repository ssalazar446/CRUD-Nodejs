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
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM paquetes WHERE ID = ?', [id]);
    res.redirect('/links')
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM paquetes WHERE id = ?', [id]);
    console.log(links);
    res.render('paquetes/edit', {links: links[0]});
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body; 
    const newPack = {
        title,
        description,
    };
    await pool.query('UPDATE paquetes set ? WHERE id = ?', [newPack, id]);
    res.redirect('/links');
});
module.exports = router;