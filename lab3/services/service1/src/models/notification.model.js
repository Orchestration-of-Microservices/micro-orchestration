module.exports = function (sequelize, DataTypes) {
    const Notification = sequelize.define('Notification', {
        to: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        createdAt: {
            field: 'created_at',
            allowNull: false,
            defaultValue: Sequelize.fn('NOW'),
            type: Sequelize.DATE
        },
    }, {
        updatedAt: false,
        underscored: true,
        freezeTableName: true,
        tableName: 'notifications',
        engine: 'InnoDB',
        charset: 'utf8'
    });

    return Notification;
};
  