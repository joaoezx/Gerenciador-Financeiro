import {randomUUID} from "node:crypto"

export class DatabaseMemory {
    conta = new Map()

    list(){
        return Array.from(this.conta.entries()).map((valorArray) => {
            const valorId = valorArray[0]
            const data = valorArray[1]

            return {
                valorId,
                ...data,
            }
        })
    }

    create(conta) {
        const valorId = randomUUID() 
        
        this.conta.set(valorId, conta)
    }

    update(valorId, conta) {
        this.conta.set(valorId, conta)
    }

    delete(valorId) {
        this.conta.delete(valorId)
    }
}