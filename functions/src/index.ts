import * as functions from 'firebase-functions';
import * as nlp from '@google-cloud/language';

const client = new nlp.LanguageServiceClient();

const cors = require('cors')({
  origin: true
});

export const tweetAnalyzer = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const content = req.body.tweet;

    console.log('go');

    const document = {
      content,
      type: 'PLAIN_TEXT'
    };

    const results = await client.analyzeSentiment({ document });

    const score = results[0].documentSentiment.score;

    res.status(200).send({ score });
  });
});
