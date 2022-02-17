import { createNativeClient, getDefaultLibraryFilename } from 'node_modules/node-firebird-driver-native';

const connect_options =  { username: 'sysdba', password: 'masterkey' }

async function test() {
    const client = createNativeClient(getDefaultLibraryFilename());    
 
    const attachment = await client.connect('localhost:/tmp/new-db.fdb', connect_options);
    const transaction = await attachment.startTransaction();
 
    await attachment.execute(transaction, 'create table t1 (n integer, d date)');
    await transaction.commitRetaining();
 
    const statement1 = await attachment.prepare(transaction, 'insert into t1 values (?, ?)');
    await statement1.execute(transaction, [1, new Date()]);
    await statement1.execute(transaction, [2, new Date()]);
    await statement1.execute(transaction, [3, new Date()]);
    await statement1.dispose();
 
    const resultSet = await attachment.executeQuery(transaction, 'select n, d from t1 where n <= ?', [2]);
    const rows = await resultSet.fetch();
 
    for (const columns of rows)
        console.log(`n: ${columns[0]}, d: ${columns[1]}`);
 
    await resultSet.close();
 
    await transaction.commit();
    await attachment.dropDatabase();
 
    await client.dispose();
}

test().then(() => console.log('Finish...'));