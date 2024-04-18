// server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';
import problemRouter from './routes/problemRoutes.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/problems', problemRouter);

connect(process.env.MONGO_URI, { dbName: 'cp-questions-bookmark' })
  .then(() => {
    console.log("Mongoose connected successfully.");
  })
  .catch((err) => {
    console.error("Mongoose connection failed:", err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
