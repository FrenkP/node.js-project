import { obtenirConnexion} from "../config/dbconf";
let message = {msg:""};

/*
reponse[0]

{
  fieldCount: 0,
  affectedRows: 1,
  insertId: 37,
  info: '',
  serverStatus: 2,
  warningStatus: 0
}

*/

const obtenirDernierId = (reponse:any) => {
  return JSON.parse(JSON.stringify({ ...reponse[0] })).insertId;
}



export const Mdl_Membre_enregistrer = async (membre: any): Promise<object> => {
  try {
    const connexion = await obtenirConnexion();
    const requeteMembre = "INSERT INTO membres VALUES(0,?,?,?,?,?)";
    let reponse =  await connexion.execute(requeteMembre, [
      membre.prenom,
      membre.nom,
      membre.courriel,
      membre.sexe,
      membre.datenaissance
    ]);
    const dernierId = obtenirDernierId(reponse);

    const requeteConnexion = "INSERT INTO connexion VALUES(?,?,?,?,?)";
    await connexion.query(requeteConnexion, [
      dernierId,
      membre.courriel,
      membre.pass,
      "M",
      "A",
    ]);
      message.msg = "Membre bien enregistré";
  } catch (e:any) {
      message.msg = "Problème avec l'enregistrement du membre!";
  } finally {
    return message;
  }
};
