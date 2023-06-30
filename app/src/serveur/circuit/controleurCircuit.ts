import express from "express";
import { Mdl_Circuit_enregistrer, Mdl_Circuit_lister } from "./modelCircuit";

export const Ctl_Circuit_gestionActions = async (req: express.Request): Promise<object> => {
  let action: string = req.body.action;
  switch (action) {
    case "enregistrer":
      // Appel au modèle
      return await Mdl_Circuit_enregistrer(req);
    case "lister":
      return await Mdl_Circuit_lister(req);
    default:
      return {};
  }
}
