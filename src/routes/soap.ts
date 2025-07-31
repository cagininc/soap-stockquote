import { Router, Request, Response } from 'express';
import { getStockQuote } from '../services/alphaVantageService';
import { jsonToXml } from '../utils/jsonToXml';

const router = Router();

router.post('/stockquote', async (req: Request, res: Response) => {
    console.log('PARSED BODY:', JSON.stringify(req.body, null, 2));

    const envelope = req.body['soap:envelope'];
  const body     = envelope?.['soap:body'];
  const sq       = body?.['stockquote'];
  const symbol   = sq?.['symbol'];

  console.log('Extracted symbol:', symbol);

  if (!symbol) {
    return res.status(400).send('Sembol (symbol) alanı gereklidir.');
  }

  if (!symbol) {
    return res.status(400).send('Sembol (symbol) alanı gereklidir.');
  }

  try {
    const quoteData = await getStockQuote(symbol);

    const xmlResponse = jsonToXml('StockQuote', {
        symbol: quoteData.symbol,
        price: quoteData.price,
        currency: quoteData.currency,
        date: quoteData.date,
      });
      
      const soapEnvelope=`
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
      ${xmlResponse}
      </soap:Body>
      </soap:Envelope>
      `;
    res.set('Content-Type', 'application/xml');
    res.send(soapEnvelope);
  } catch (error) {
    res.status(500).send('Fiyat bilgisi alınamadı.');
  }
});

export default router;
