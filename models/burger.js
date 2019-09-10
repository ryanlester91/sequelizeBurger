module.exports = function(sequelize, DataTypes) {
    let Burger = sequelize.define("Burger", 
    {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }      
  },
      devoured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
},
{timestamps: false }
/*{
  timestamps: true,
  createdAt: "date_created",
  updatedAt: "date_eaten",
  deletedAt: false
}*/
    );



return Burger;
};