import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Vehicle extends Model {
  public id!: number;
  public make!: string;
  public model!: string;
  public generation!: string;
  public year!: number;
  public vin!: string;
}

Vehicle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    generation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vin: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Vehicle',
  }
);

export default Vehicle;