const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model {
    // checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password);
    //   }
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
  // hooks: {
  //   beforeCreate: async (newUserData) => {
  //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
  //     return newUserData;
  //   },
  //   beforeUpdate: async (updatedUserData) => {
  //     updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
  //     return updatedUserData;
  //   },
  // },


    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
  }
);

module.exports = Users;

