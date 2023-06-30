//import mysql from 'mysql';
import mod_mysql from 'mysql2/promise';
//export const mysql = mod_mysql;
//Pas de default puisque interdit sur des variables. On récupére par { connexion }

export let obtenirConnexion = async () => {
   return mod_mysql
     .createPool({
       connectionLimit: 100,
       waitForConnections: true,
       host: "localhost",
       user: "root",
       password: "",
       database: "bdcircuits",
     });
}