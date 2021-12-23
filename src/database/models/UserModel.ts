import { DataTypes } from 'sequelize'
import { db } from '../db'

export const UserModel = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER
  }
})
