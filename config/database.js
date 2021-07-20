const path = require('path');

module.exports = {
  'config': path.join(__dirname, 'database.json'),
  'migrations-path': path.join(__dirname, '../migrations')
};
