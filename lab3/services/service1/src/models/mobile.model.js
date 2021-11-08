module.exports = function (sequelize, DataTypes) {
    const Mobile = sequelize.define('Mobile', {
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
        tableName: 'mobiles',
        engine: 'InnoDB',
        charset: 'utf8'
    });

    return Mobile;
};
  