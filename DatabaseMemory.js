import {randomUUID} from "node:crypto"

export class DatabaseMemory {
    #conta = new Map()

    list(){
        return Array.from(this.#conta.entries()).map((valorArray) => {
            const id = valorArray[0]
            const data = valorArray[1]

            return {
                id,
                ...data,
            }
        })
    }

    create(conta) {
        const valorId = randomUUID()

        this.#conta.set(valorId, AdicionarValor)
    }

    uptade(id, AdicionarValor) {
        this.#conta.set(id, AdicionarValor)
    }
}