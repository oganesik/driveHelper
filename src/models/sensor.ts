import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Sensor extends Model {
  public id!: number;
  public type!: string;
  public value!: string;
  public vehicleId!: number;
  public timestamp!: Date;
}

Sensor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Vehicles',
        key: 'id',
      },
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Sensor',
  }
);

export default Sensor;