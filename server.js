import { fastify  } from "fastify"
import { DatabaseMemory } from "./DatabaseMemory,js"
import { Database } from "sqlite3"
import { valor } from "./JS.js"

const server = fastify()

server.post("/conta", (request, response) => {
    const {valor} = request.body

    database.create({
        resultado
    })

    return response.status(201).send()
})

server.get("/conta", () => {
    const valor = database.list()

    console.log(valor)

    return valor
})

server.put("/conta/:id", (request, response) => {

    const valorId = request.params.valorId
    database.uptade(valorId, {
        resultado
    })

    return response.status(204).send()
})
server.listen({
    port: 3333
})