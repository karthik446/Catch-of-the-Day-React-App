import Rebase from "re-base";
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCyMqkhN6HLL-Z6Sh00M-NLEACLXozGR2w",
  authDomain: "catch-of-the-day-karthik-saras.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-karthik-saras.firebaseio.com"
};
const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
