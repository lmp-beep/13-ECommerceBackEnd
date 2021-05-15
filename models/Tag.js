// **********
// MY CODE - ALL OTHER STARTER CODE
// **********

const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
  // **********
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
    // **********
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;

// * `Tag`
//   * `id`
//     * Integer.
//     * Doesn't allow null values.
//     * Set as primary key.
//     * Uses auto increment.
//   * `tag_name`
//     * String.
