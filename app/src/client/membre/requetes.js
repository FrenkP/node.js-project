let enregistrer = () =>  {
	let formMembres = new FormData(document.getElementById('formEnreg'));
    formMembres.append("action","enregistrer");
	let donneesMembre = formaterDonneesFormData(formMembres);// Dans global.js
	fetch('/membre', {
			method: "POST",
			body: donneesMembre
		})
		.then(reponse => reponse.json())
		.then(reponseJSON => {
			afficherMessage("msgE",reponseJSON.msg);// Définie dans js/global.js. Le id où afficher et le message
		})
		.catch((error) => {
			afficherMessage("msgE", "Problème pour enregistrer membre, essayez plus tard. Merci.");
		});
}