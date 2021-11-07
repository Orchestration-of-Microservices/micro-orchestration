module.exports = function (sequelize, DataTypes) {
    const Mobile = sequelize.define('Mobile', {
        to: {
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
        tableName: 'mobiles',
        engine: 'InnoDB',
        charset: 'utf8'
    });

    return Mobile;
};
  