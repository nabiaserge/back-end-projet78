'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dossiers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      memoire: {
        type: Sequelize.STRING
      },
      rapportPreSoutenance: {
        type: Sequelize.STRING
      },
      recuDroitUniv: {
        type: Sequelize.STRING
      },
      attestationLicence: {
        type: Sequelize.STRING
      },
      releveM1: {
        type: Sequelize.STRING
      },
      releveM2: {
        type: Sequelize.STRING
      },
      ficheInscriptionA: {
        type: Sequelize.STRING
      },
      copieActeNaiss: {
        type: Sequelize.STRING
      },
      cv: {
        type: Sequelize.STRING
      },
      attestationED: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dossiers');
  }
};