const { DataTypes, Model } = require('sequelize');

class Videos extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            url: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Categories, { foreignKey: 'category'});
    }
}

module.exports = Videos;