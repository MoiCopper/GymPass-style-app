import { env } from './env'
import { app } from './app'

app
  .listen({
    port: env.PORT,
    host: '0.0.0.0', // to avoid issues with any client that connects to this server
  })
  .then(() => {
    console.log('🎃 Server listening on port 3333')
  })
