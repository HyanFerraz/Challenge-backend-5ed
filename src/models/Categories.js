const { DataTypes, Model } = require('sequelize');

class Categories extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            color: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Videos, { foreignKey: 'category', as: 'videos' });
    }
}

module.exports = Categories;