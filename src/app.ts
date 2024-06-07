import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './database';
import userRoutes from './routes/userRoutes';
import vehicleRoutes from './routes/vehicleRoutes';

const app = express();

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', vehicleRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});