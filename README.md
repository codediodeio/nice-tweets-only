# Nice Tweets Only - Ionic, Cloud Functions, and Language API

This repo demonstrates an Ionic v4 app that can asynchronously validate a form based on sentiment analysis via the Cloud Language API.

Read the post and watch the screencast (soon).

![](https://firebasestorage.googleapis.com/v0/b/firestarter-96e46.appspot.com/o/assets%2Fionic-NLP-demo.gif?alt=media&token=4a578089-7ca8-45ad-993b-c3c77a8658e6)

## Usage

You must have a firebase project and the firebase-tools CLI installed.

- `git clone`, `npm install`, and `ionic serve`
- `firebase init functions` - don't overwrite existing code
- Enable the Cloud Language API on the GCP console
- `cd functions && npm run serve`
- Update the function URL endpoint in tweet-from.component.ts
