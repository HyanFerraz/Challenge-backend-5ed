'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
          type: Sequelize.STRING,
          allowNull: false
      },
      color: {
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt: {
          type: Sequelize.DATE,
          allowNull: false
      },
      updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
      }
    });
    await queryInterface.insert('Categories', [
        { title: 'Free',
          color: '#FF0000',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Categories');
  }
};
