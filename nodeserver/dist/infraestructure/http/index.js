"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const grabadoController = require('../controllers/grabadoController');
/*async function routes (fastify:any, options:any) {
  
    fastify.get('/list', grabadoController.getGrabados)

}
  
module.exports = routes
*/
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        //const collection = fastify.mongo.db.collection('test_collection')
        fastify.get('/list', grabadoController.getGrabados);
        fastify.get('/grabado/:idgrabado', grabadoController.getGrabadosById);
    });
}
module.exports = routes;
