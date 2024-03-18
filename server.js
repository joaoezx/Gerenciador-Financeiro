import { fastify  } from "fastify"
import { DatabaseMemory } from "./DatabaseMemory.js"

const server = fastify()

const database = new DatabaseMemory()

server.post("/conta", (request, response) => {
    const conta = request.body
    database.create(conta)

    return response.status(201).send()
})

server.get("/conta", () => {
    const conta = database.list()

    console.log(conta)

    return conta
})

server.put("/conta/:valorId", (request, response) => {

    const valorId = request.params.valorId
    const conta = request.body

    database.update(valorId, conta)

    return response.status(204).send()
})

server.delete("/conta/:valorId", (request, response) => {
    const valorId = request.params.valorId

    database.delete(valorId)

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