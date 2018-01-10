import Rebase from "re-base";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCzn66RPk3GOLv2RYUCbDytj5XYDPDVIA0",
  authDomain: "to-do-app-xavier.firebaseapp.com",
  databaseURL: "https://to-do-app-xavier.firebaseio.com"
};

const app = firebase.initializeApp(config);

const base = Rebase.createClass(app.database());

export default base;
