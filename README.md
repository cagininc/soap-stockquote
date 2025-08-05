# SOAP Stock Quote API

**Description:**  
A Node.js based SOAP API that fetches real-time stock quotes by integrating with the Alpha Vantage REST API. Converts incoming SOAP XML requests to JSON, retrieves stock data, then converts it back to XML wrapped in a SOAP envelope.

- AWS Lambda functions provide serverless, scalable compute resources.
- API Gateway exposes Lambda functions as HTTP endpoints.
- The serverless.yml file configures deployment and endpoint settings.

Sensitive API keys are managed securely via .env files and excluded from version control.
---

## Features

- Parses incoming SOAP XML requests using `express-xml-bodyparser`
- Fetches real-time stock quotes from Alpha Vantage API
- Converts JSON data to XML for SOAP-compliant responses
- Serverless-ready: deployable on AWS Lambda with Serverless Framework
- Modular project structure (routes, services, utils)

---

## Technologies

- Node.js & Express.js
- TypeScript
- Axios (for HTTP requests)
- express-xml-bodyparser
- Serverless Framework
- AWS Lambda
- dotenv

---
## Project Structure
src/
├── index.ts             
│   └── soap.ts         
├── services/
│   └── alphaVantageService.ts  # Alpha Vantage REST API'dan hisse senedi verisi çeken servis
├── utils/
│   └── jsonToXml.ts      
.env                      
serverless.yml            

## Getting Started

### Prerequisites

- Node.js (>=16)
- npm 
- Alpha Vantage API key (register free at https://www.alphavantage.co)

### Installation

1. Clone the repo:

```bash
git clone https://github.com/yourusername/soap-stockquote-api.git
cd soap-stockquote-api


