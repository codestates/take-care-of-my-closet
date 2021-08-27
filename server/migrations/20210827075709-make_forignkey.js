'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn('posts', 'user_id', Sequelize.INTEGER );

     await queryInterface.addConstraint('posts', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'FK_users',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
      });
      
     await queryInterface.addColumn('comments', 'post_id', Sequelize.INTEGER );

     await queryInterface.addConstraint('comments', {
       fields: ['post_id'],
       type: 'foreign key',
       name: 'FK_comment_post',
       references: {
         table: 'posts',
         field: 'id'
       },
       onDelete: 'cascade',
       onUpdate: 'cascade'
       });

       await queryInterface.addColumn('comments', 'user_id', Sequelize.INTEGER );

       await queryInterface.addConstraint('comments', {
         fields: ['user_id'],
         type: 'foreign key',
         name: 'FK_comment_user',
         references: {
           table: 'users',
           field: 'id'
         },
         onDelete: 'cascade',
         onUpdate: 'cascade'
         });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
