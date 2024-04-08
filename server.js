import { fastify  } from "fastify"
//import { DatabaseMemory } from "./DatabaseMemory.js"
import { DatabasePostgres } from "./database-postgres.js"

const server = fastify()

//const database = new DatabaseMemory()
const database = new DatabasePostgres()

server.post("/conta", async (request, response) => {
    const {Valor} = request.body

   await database.create({
        Valor
    })

    return response.status(201).send()
})

server.get("/conta", async (request) => {
    const search = request.query.search

    const conta = await database.list(search)

    return conta
})

server.put("/conta/:valorId", async (request, response) => {

    const valorId = request.params.valorId
    const {Valor} = request.body

    await database.update(valorId, {
        Valor
    })

    return response.status(204).send()
})

server.delete("/conta/:valorId", async (request, response) => {
    const valorId = request.params.valorId

    await database.delete(valorId)

    return response.status(204).send()
})
    
server.listen({
    port: 3333
}, (error) => {
    console.log("rodando")
    if (error) {
        console.error(error)
    }
})