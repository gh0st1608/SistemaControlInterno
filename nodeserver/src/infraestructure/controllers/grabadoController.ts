//const boom = require('boom')
const Grabado = require("../../domain/models/Grabado")
const Conexion = require("../db/index")


async function getGrabados(req:any, reply:any) {
    try {
      const { rows } = await Conexion('SELECT * FROM Grabado')
      //console.log(JSON.stringify(rows))
      reply.send(rows)
    } catch (err) {
      console.log('Database ' + err)
    }
}

async function getGrabadosById(req:any, reply:any) {
    try {
      const { rows } = await Conexion('SELECT descripcion FROM Grabado WHERE idgrabado = $1',[req.params.idgrabado],)
      //console.log(JSON.stringify(rows))
      reply.send(rows)
    } catch (err) {
      console.log('Database ' + err)
    }
}

module.exports = {
    getGrabados,
    getGrabadosById
}
/*
// get all post 
module.exports.getAllGrabado = async (req:any, reply:any) => {
    try {
        let grabados = await Grabado.find();
        return grabados;
    } catch (err) {
        throw boom.boomify(err)
    }
}
// get single post by id 
module.exports.getSingleGrabado = async (req:any, reply:any) => {
    try {
        const id = req.params.id
        let grabado = await Grabado.findById(id);
        return grabado
    } catch (err) {
        throw boom.boomify(err)
    }
}
module.exports.addNewGrabado = async (req:any, reply:any) => {
    try {
        let grabado = new Grabado(req.body);
        let newgrabado = await grabado.save();
        return newgrabado
    } catch (err) {
        throw boom.boomify(err)
    }
}
module.exports.updateGrabado = async (req:any, reply:any) => {
    try {
        const id = req.params.id
        let result = await Grabado.findByIdAndUpdate(id, req.body, {
            new: true
        });
        return result
    } catch (err) {
        throw boom.boomify(err)
    }
}
module.exports.deleteGrabado = async (req:any, reply:any) => {
    try {
        const id = req.params.id
        let result = await Grabado.findByIdAndDelete(
            id
        );
        return {Message:"Post Deleted"}
    } catch (err) {
        throw boom.boomify(err)
    }
}
*/