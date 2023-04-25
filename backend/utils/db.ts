import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'marketplace',
    namedPlaceholders: true,
    decimalNumbers: true,
})

// export const pool = createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '123456789',
//     database: 'megak_ads',
//     namedPlaceholders: true,
//     decimalNumbers: true,
// })
