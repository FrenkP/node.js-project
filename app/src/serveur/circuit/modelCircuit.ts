import { obtenirConnexion } from "../config/dbconf";
import * as fs from "fs-extra";
import sha1 = require("sha1");
let message = { msg: "" };

export const Mdl_Circuit_enregistrer = async (req: any): Promise<object> => {
  const DOSSIER_POCHETTES = __dirname + "/../pochettes/";
  let pays = req.body.pays;
  let ville = req.body.ville;
  let duree = req.body.duree;
  let conti = req.body.conti;
  let pochette = "2.jpg";

  try {
    const connexion = await obtenirConnexion();
    const requete = "INSERT INTO circuits VALUES(0,?,?,?,?,?)";
    if (req.files.length > 0) {
      let extension = req.files[0].originalname.split(".").pop();
      pochette = sha1(pays + process.hrtime()) + "." + extension;
      await fs.rename(req.files[0].path, DOSSIER_POCHETTES + pochette);
    }
    await connexion.query(requete, [pays, ville, duree, conti, pochette]);
    message.msg = "Circuit bien enregistré.";
  } catch (e) {
    message.msg = "Problème pour enregistrer le circuit.";
  } finally {
    return message;
  }
}

export const Mdl_Circuit_lister = async (req: any): Promise<object> => {
  try {
    const connexion = await obtenirConnexion();
    return await connexion.query("SELECT * FROM circuits");
  } catch (e) {
    message.msg = "Problème pour lister les circuits.";
  } finally {
    return message;
  }
}
