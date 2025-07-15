import express from 'express';
import { json } from 'body-parser';
import router  from './controllers/inspection.controller';
import errorHandler  from './middleware/errorHandler';
import logger  from './utils/logger';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());
app.use(logger);

// Routes
app.use('/inspections', router);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});