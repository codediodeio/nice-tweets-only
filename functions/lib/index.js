"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const nlp = require("@google-cloud/language");
const client = new nlp.LanguageServiceClient();
const cors = require('cors')({
    origin: true
});
exports.tweetAnalyzer = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    cors(req, res, () => __awaiter(this, void 0, void 0, function* () {
        const content = req.body.tweet;
        console.log('go');
        const document = {
            content,
            type: 'PLAIN_TEXT'
        };
        const results = yield client.analyzeSentiment({ document });
        const score = results[0].documentSentiment.score;
        res.status(200).send({ score });
    }));
}));
//# sourceMappingURL=index.js.map