import { app }
from "../firebase/firebase-config.js";

import {

  getAuth,
  signInWithEmailAndPassword,
  signOut

} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth(app);

window.loginUser = function(){

  const email =
  document.getElementById('email').value;

  const password =
  document.getElementById('password').value;

  signInWithEmailAndPassword(
    auth,
    email,
    password
  )

  .then(()=>{

    alert('Login Successful');

    window.location='portal.html';

  })

  .catch((error)=>{

    alert(error.message);

  });

}

window.logoutUser = function(){

  signOut(auth).then(()=>{

    window.location='index.html';

  });

}