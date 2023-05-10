'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Videos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      category: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'Categories', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },
      title: {
          type: Sequelize.STRING,
          allowNull: false
      },
      description: {
          type: Sequelize.STRING,
          allowNull: false
      },
      url: {
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
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Videos');
  }
};
