import {randomUUID} from "node:crypto"
import { sql } from "./db.js"

export class DatabasePostgres {
    conta = new Map()

    async list(search){
        let conta

        if (search) {
            conta = await sql`select * from conta where conta "%${search}%"`
        } else {
            conta = await sql`select * from conta`
        }
        return conta

        }
    

    async create(conta) {
        const valorID = randomUUID()
        const {Valor} = conta

        await sql`insert into conta (id, Valor) Values (${valorID}, ${Valor})`
    }

    async update(valorId, conta) {
       const {Valor} = conta

       await sql`update conta set Valor = ${Valor} WHERE id = ${valorId}`
    }

    async delete(valorId) {
      await sql`delete from conta where id = ${valorId}`
    }
}