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
        const valorId = randomUUI()

        this.#conta.set(valorId, valor)
    }

    uptade(id, valor) {
        this.#conta.set(id, valor)
    }
}