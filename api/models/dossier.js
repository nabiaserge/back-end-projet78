'use strict';
module.exports = (sequelize, DataTypes) => {
  const dossier = sequelize.define('dossier', {
    memoire: DataTypes.STRING,
    rapportPreSoutenance: DataTypes.STRING,
    recuDroitUniv: DataTypes.STRING,
    attestationLicence: DataTypes.STRING,
    releveM1: DataTypes.STRING,
    releveM2: DataTypes.STRING,
    ficheInscriptionA: DataTypes.STRING,
    copieActeNaiss: DataTypes.STRING,
    cv: DataTypes.STRING,
    attestationED: DataTypes.STRING
  }, {});
  dossier.associate = function(models) {
    // associations can be defined here
  };
  return dossier;
};