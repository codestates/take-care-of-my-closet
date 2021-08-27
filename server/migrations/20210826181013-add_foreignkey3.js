'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn('likes', 'post_id', Sequelize.INTEGER );

     await queryInterface.addConstraint('likes', {
       fields: ['post_id'],
       type: 'foreign key',
       name: 'FK_likes_post',
       references: {
         table: 'posts',
         field: 'id'
       },
       onDelete: 'cascade',
       onUpdate: 'cascade'
       });

       await queryInterface.addColumn('likes', 'user_id', Sequelize.INTEGER );

       await queryInterface.addConstraint('likes', {
         fields: ['user_id'],
         type: 'foreign key',
         name: 'FK_likes_user',
         references: {
           table: 'users',
           field: 'id'
         },
         onDelete: 'cascade',
         onUpdate: 'cascade'
         });
      
         await queryInterface.addColumn('unlikes', 'post_id', Sequelize.INTEGER );

         await queryInterface.addConstraint('unlikes', {
           fields: ['post_id'],
           type: 'foreign key',
           name: 'FK_unlikes_post',
           references: {
             table: 'posts',
             field: 'id'
           },
           onDelete: 'cascade',
           onUpdate: 'cascade'
           });
  
           await queryInterface.addColumn('unlikes', 'user_id', Sequelize.INTEGER );
  
           await queryInterface.addConstraint('unlikes', {
             fields: ['user_id'],
             type: 'foreign key',
             name: 'FK_unlikes_user',
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
