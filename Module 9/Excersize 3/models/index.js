const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Load models
db.User = require('./User')(sequelize, DataTypes);
db.Post = require('./Post')(sequelize, DataTypes);
db.Comment = require('./Comment')(sequelize, DataTypes);

// Define associations

// One-to-Many: User → Post
db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);

// One-to-Many: Post → Comment
db.Post.hasMany(db.Comment);
db.Comment.belongsTo(db.Post);

// One-to-Many: User → Comment
db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);

// Many-to-Many: Post ↔ User (Likes)
db.Post.belongsToMany(db.User, { through: 'PostLikes', as: 'Likers' });
db.User.belongsToMany(db.Post, { through: 'PostLikes', as: 'LikedPosts' });

module.exports = db;
