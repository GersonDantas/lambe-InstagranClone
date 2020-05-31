const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const fs = require('fs');
const uuid = require('uuidv4');
const {Storage} = require('@google-cloud/storage');
const sotorage = new Storage({
  projectId: 'cloneinsta-a7395',
  keyFilename: 'cloneinsta',
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.uploadImage = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    try {
      fs.writeFileSync('/tmp/imageToSave.jpg', request.body.image, 'base64');
      //local onde eu vou armazenar os arquivos
      const bucket = sotorage.bucket('cloneinsta-a7395.appspot.com');
      const id = uuid();
      bucket.upload(
        '/tmp/imageToSave.jpg',
        {
          uploadType: 'media',
          destination: `/posts/${id}.jpg`,
          metadata: {
            metadata: {
              contentType: 'image/jpeg',
              firebaseStorageDownloadTokens: id,
            },
          },
        },
        (err, file) => {
          if (err) {
            console.log(err);
            return response.status(500).json(err);
          } else {
            const fileName = encodeURIComponent(file.name);
            const imageUrl =
              'https://firebasestorage.googleapis/v0/b/' +
              bucket.name +
              '/o/' +
              fileName +
              '?alt=media&token=' +
              id;
            return response.status(201).json({imageUrl: imageUrl});
          }
        },
      );
    } catch (error) {
      console.log(error);
      return response.status(500).json({error});
    }
  });
});
