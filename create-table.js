import { sql } from "./db.js"

// sql`DROP TABLE IF EXISTS conta;`.then(() => {
//     console.log("Tabela apagada!")
// })

sql`
   CREATE TABLE conta (
       id              TEXT PRIMARY KEY,
       Valor           INTEGER
   );
`.then(() => {
   console.log("Tabela craida!")
})