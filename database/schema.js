const sequelize=require('./connect')
const DataTypes=require('sequelize')

const userSchema = sequelize.define('user', {
    // Model attributes are defined here
    id:{
      type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,


    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      mobile: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      password: {
        type: DataTypes.STRING
        // allowNull defaults to true
      }
  }, {
    timestamps: false
  });

  const expenseSchema = sequelize.define('expenses', {
    // Model attributes are defined here
    Expense_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Category: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    Amount: {
        type: DataTypes.INTEGER
        // allowNull defaults to true
      },
  }, {
    // Other model options go here
  });


  module.exports={userSchema,expenseSchema}