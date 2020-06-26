'use strict';
module.exports = (sequelize, DataTypes) => {
  const etudiant = sequelize.define('etudiant', {
    matricule: DataTypes.STRING,
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    filiere: DataTypes.STRING,
    departement: DataTypes.STRING
  }, {});
  etudiant.associate = function(models) {
    // associations can be defined here
  };
  return etudiant;
};