import { obtenirConnexion } from "../config/dbconf";
let message = {OK:true, msg:"", statut:"", role:""};
//https://expressjs.com/fr/guide/database-integration.html

 export const Mdl_Connexion = async (donneesConnexion: any): Promise<object> => {
    try {
      const connexion = await obtenirConnexion();
      const requeteSelection = "SELECT * FROM connexion WHERE courriel=? AND pass=?";
      let resultat = await connexion.execute( requeteSelection,[donneesConnexion.courrielc, donneesConnexion.passc]);
      let resultatJSON = await JSON.parse(JSON.stringify(resultat[0]));
      if(resultatJSON.length > 0){
            message.OK = true;
            message.statut = resultatJSON[0].statut; 
            message.role = resultatJSON[0].role;
      } else {
            message.OK = false;
            message.msg ="SVP vérifiez vos paramétres de connexion.";
        }
    } catch (erreur) {
            message.OK = false,
            message.msg = "Problème avec avec connexion!";
    } finally {
         return message;
    }
 }

