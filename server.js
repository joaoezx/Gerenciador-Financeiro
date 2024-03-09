import { fastify  } from "fastify"
import { AdicionarValor } from "./JS.js"
import { DatabaseMemory } from "./DatabaseMemory.js"

const server = fastify()

const database = new DatabaseMemory()

server.post("/conta", (request, response) => {
    const {AdicionarValor} = request.body
    database.create({
        AdicionarValor
    })

    return response.status(201).send()
})

server.get("/conta", () => {
    const AdicionarValor = database.list()

    console.log(AdicionarValor)

    return AdicionarValor
})

server.put("/conta/:id", (request, response) => {

    const valorId = request.params.valorId
    // database.uptade(valorId, {
    //     AdicionarValor
    // })

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