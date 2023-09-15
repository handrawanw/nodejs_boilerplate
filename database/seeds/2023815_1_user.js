/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const hashing=require("../../helper/hashing");


exports.seed = async function(knex) {
    // Deletes ALL existing entries
    
    // await knex('users').del();
    await knex('users').insert([
      {
        id:1,
        email:"admin@gmail.com",
        username:"admin",
        password:hashing.hashPass("admin#@!")
      }
    ]);
  
  };
  
