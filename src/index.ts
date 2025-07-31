import express from 'express';
import xmlparser from 'express-xml-bodyparser';
import soapRoute from './routes/soap';
import serverless from 'serverless-http'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(xmlparser({ explicitArray: false }));
app.use('/soap', soapRoute);
export const handler = serverless(app)
//

//  app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
