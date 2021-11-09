module.exports = function (sequelize, DataTypes) {
    const Notification = sequelize.define('Notification', {
        recepient: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: true
        }
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
  