// ESM
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

/**
 * Run the server!
 */
const start = async () => {
  try {
    const port = process.env.PORT || 3000
    const host = process.env.HOST || 'localhost'
    await fastify.listen({ port, host })
    console.log(`🚀 Backend server running on http://${host}:${port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()