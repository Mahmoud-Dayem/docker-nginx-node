import express from 'express';

// const mongoose = require('mongoose');
import { createClient } from 'redis';
import pg from 'pg'
const { Pool, Client } = pg
const connectionString = 'postgresql://postgres:ahli@postgres:5432/school'

const pg_client = new Client({
    connectionString,
  })
   
  await pg_client.connect().then(()=>console.log('NOW POSTGRES CONNECTED OK'));
  
   
  const postgres_data = await pg_client.query('SELECT * from student')
   
  console.log('posrgres data',postgres_data.rows[0]);
  
  await pg_client.end()


const app = express();

const PORT = process.env.PORT || 4000
app.listen(PORT,()=>console.log(`SERVER RUNNING ON PORT ${PORT}`)
)
const uri = 'redis://redis:6379'
const client =  createClient({url: uri})

client.on('error', err => console.log('Redis Client Error', err));
client.on('connect', () => console.log('connected to redis is server'));
console.log(uri);
client.connect();


await client.set('name', 'eyad mahmoud');

const value = await client.get('name').then();
console.log('KEY is ' , value);
// await client.disconnect();
app.get('/',(req,res)=>{
    res.send('<h1>Welcome - Mahmoud AbdelDayem</h1>')
})

