--
-- Base de données : `bdboutique`
--
CREATE DATABASE IF NOT EXISTS `bdcircuits` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `bdcircuits`;

--
-- Structure de la table `membres`
--

CREATE TABLE `membres` (
  `idm` int(11) AUTO_INCREMENT,
  `nom` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `prenom` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `courriel` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `sexe` varchar(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datenaissance` date DEFAULT NULL,
  CONSTRAINT membres_idm_PK PRIMARY KEY (idm)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `membres`
--

INSERT INTO `membres` (`idm`, `nom`, `prenom`, `courriel`, `sexe`, `datenaissance`) VALUES
(1, 'Bond', 'James', 'admin@compagnie.com', 'M', '1968-02-16');

--
-- Structure de la table `connexion`
--

CREATE TABLE `connexion` (
  `idm` int(11) NOT NULL,
  `courriel` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `pass` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `role` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'M',
  `statut` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'A',
  CONSTRAINT connexion_idm_FK FOREIGN KEY (idm) REFERENCES membres(idm)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `connexion`
--

INSERT INTO `connexion` (`idm`, `courriel`, `pass`, `role`, `statut`) VALUES
(1, 'admin@compagnie.com', '12345', 'A', 'A');

CREATE TABLE `circuits` (
  `idc` int(11) AUTO_INCREMENT,
  `pays` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `ville` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `duree` int NOT NULL,
  `conti` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  CONSTRAINT circuits_idc_FK PRIMARY KEY (idc)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
