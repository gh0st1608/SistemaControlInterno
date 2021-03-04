const grabadoController = require('../controllers/grabadoController');

/*async function routes (fastify:any, options:any) {
  
    fastify.get('/list', grabadoController.getGrabados)

}
  
module.exports = routes
*/
async function routes (fastify:any, options:any) {
  //const collection = fastify.mongo.db.collection('test_collection')

  fastify.get('/grabado/lista', grabadoController.getGrabados)
  fastify.get('/grabado/:idgrabado', grabadoController.getGrabadosById)
  
  
}

module.exports = routes
