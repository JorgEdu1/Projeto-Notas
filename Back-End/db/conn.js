const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('notas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso!');
} catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
}

module.exports = sequelize;