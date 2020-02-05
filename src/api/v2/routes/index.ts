import * as express from 'express'

const router = express.Router();

router.post('/', (req, res) => {
  const data = req.body.data;
  const splitData = data.match(/[a-z]+|[^a-z]+(0)|\d{7,}/gi);

  res.type('json')
  try {
    const response = {
      statusCode: 200,
      data:  {
          firstName: splitData[0],
          lastName: splitData[2],
          clientId: splitData[4].substring(0,3).concat("-").concat(splitData[4].substring(3))
      }
    };
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'There was an error parsing the input data.' });
  }
  
});

export default router;
