const { response, request } = require('express');

const usuariosGet = (req, res) => {

    const {q, nombre = 'No name', apikey} = req.query;

    res.json({
        msg: 'Get api - Controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;
    res.json({
        msg: 'Put api - Controlador',
        id
    });
}

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'Post api - Controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        "ok": true,
        "msg": 'Delete api - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete

}