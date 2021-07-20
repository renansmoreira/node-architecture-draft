### Migrations

## Criar banco
npx sequelize --env test --options-path config/database.js db:create

## Criar uma migration vazia
npx sequelize --env test --options-path config/database.js migration:generate --name criacao-de-usuario

## Rodar migration
npx sequelize --env test --options-path config/database.js db:migrate

## Desfazer migration
npx sequelize --env test --options-path config/database.js db:undo