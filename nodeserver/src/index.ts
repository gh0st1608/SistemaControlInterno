const fastify = require('fastify')({
  logger: true
})
/*
cabecera que usan los navegadores web , 
compartir recursos a traves de curso de dominio, entre navegadores
el backend proteje sus recursos,(proteccion simple)
Generalmente se hace cors para todos,

*/
fastify.register(require('fastify-cors'), { 
  origin:'*'
  // put your options here
})
fastify.register(require('../src/infraestructure/http/index'))

//fastify.register(require('../src/infraestructure/db/index'))

fastify.listen(3000, function (err:any, address:any) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})