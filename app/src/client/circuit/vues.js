const construireEntetes = () => {
  const entete = `
        <i class="fa fa-plus-square fa-2x addlivre" aria-hidden="true" onClick="montrerFormEnregLivre();"></i>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Num</th>
                <th scope="col">Pays</th>
                <th scope="col">Ville</th>
                <th scope="col">Durée</th>
                <th scope="col">Continent</th>
                <th scope="col">Image</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
    `;
  return entete;
};

const construireTR = (unCircuit) => {
  let tr = `<tr>
        <th>${unCircuit.idf}</th>
        <td>${unCircuit.pays}</td>
        <td>${unCircuit.ville}</td>
        <td>${unCircuit.duree}</td>
        <td>${unCircuit.conti}</td>
        <td><img src="${unCircuit.pochette}"</td>
        <td>
            <i class="fa fa-pencil-square fa-1x btn-editer" aria-hidden="true" onClick='editerFilm(${unCircuit.idf});'></i>
            <i class="fa fa-minus-square fa-1x btn-enlever" aria-hidden="true"  onClick='enleverFilm(this, ${unCircuit.idf});'></i>
        </td>
    </tr>`;
  return tr;
};

const lister = () => {
  let resultat = construireEntetes();
  for (let unCircuit of listeCircuits) {
    resultat += construireTR(unCircuit);
  }
  resultat += "</tbody></table>";
  document.getElementById("contenu").innerHTML = resultat;
};
