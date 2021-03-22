import React from "react";



export default class Index extends React.Component {
  async initializeAppFunctions() {
    const admin = require("firebase-admin");

    const serviceAccount = require("../serviceAccountKey.json");

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    const db = admin.firestore();
  }

  // static async getInitialProps() {
  //   let firebase = await loadFirebase();
  //   let db = firebase.firestore();
  //   const snapshot = await db.collection("Food").get();
  //   snapshot.forEach((doc) => {
  //     console.log(doc.id, "=>", doc.data());
  //   });
  // }

  render() {
    return <div>{getInitialProps()}Hello World</div>;
  }
}
