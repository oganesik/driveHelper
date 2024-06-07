import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class User extends Model {
  public id!: number;
  public name!: string;
  public pNumber!: string;
  public vehicles!: number[];
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicles: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;