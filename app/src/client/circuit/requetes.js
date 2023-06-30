let listeCircuits = null;

let enregistrer = () => {
  let formCircuit = new FormData(document.getElementById("formEnreg"));
  formFilm.append("action", "enregistrer");
  //let donneesCircuit = formaterDonneesFormData(formCircuit);// Dans global.js
  $.ajax({
    type: "POST",
    url: "/circuit",
    data: formCircuit,
    dataType: "text",
    contentType: false,
    processData: false,
    success: (reponse) => {
      alert(reponse);
    },
    fail: (e) => {
      alert(JSON.stringify(e));
    },
  });
};

let lister = () => {
  let formCircuit = new FormData();
  formFilm.append("action", "lister");
  $.ajax({
    type: "POST",
    url: "/circuit",
    data: formCircuit,
    dataType: "json",
    contentType: false,
    processData: false,
    success: (reponse) => {
      lister();
    },
    fail: (e) => {
      alert(JSON.stringify(e));
    },
  });
};
