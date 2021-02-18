const fastify = require('fastify')({
  logger: true
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