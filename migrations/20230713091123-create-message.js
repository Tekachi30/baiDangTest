'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message_content: {
        type: Sequelize.STRING
      },
      user_send: {
        type: Sequelize.INTEGER
      },
      user_reply: {
        type: Sequelize.INTEGER
      },
      status_seen: {
        type: Sequelize.BOOLEAN
      },
      status_message: {
        type: Sequelize.BOOLEAN
      },
      reply_mess: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('messages');
  }
};