import  { createConnection } from 'mysql2/promise';

(async() => {
    const connection = await createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456789',
        database: 'marketplace'
    })
    // console.log(connection);
    const [result] = await connection.execute('SELECT * FROM `Products`')
    console.log(result);
})();

