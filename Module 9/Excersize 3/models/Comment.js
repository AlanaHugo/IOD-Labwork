module.exports = (sequelize, DataTypes) => {

const Comment = sequelize.define('Comment', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

return Comment;

}
