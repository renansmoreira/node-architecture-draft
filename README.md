### Migrations commands using sequelize
npx sequelize --env test --options-path config/database.js db:create
npx sequelize --env test --options-path config/database.js migration:generate --name criacao-de-usuario
npx sequelize --env test --options-path config/database.js db:migrate
npx sequelize --env test --options-path config/database.js db:undo

### Running locally (node 14 required)
npm i
npm run dev