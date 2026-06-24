const firebaseConfig = {
apiKey: "AIzaSyAIqR2CroYooTUvBsIT4XJvTgjtg2NzpYk",
authDomain: "paramount-academy-khandwa.firebaseapp.com",
databaseURL: "https://paramount-academy-khandwa-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "paramount-academy-khandwa",
storageBucket: "paramount-academy-khandwa.firebasestorage.app",
messagingSenderId: "490109984190",
appId: "1:490109984190:web:683a0e794f6a58df85adef"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();