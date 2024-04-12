const express = require('express');
const sequelize = require('./config/MySQL_DB');
const productRoutes = require('./router/ProductRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', productRoutes);

sequelize.sync().then(() => {
    console.log('Synced with DB');
}).catch((error) => {
    console.error('Unable to sync with DB:', error);
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});