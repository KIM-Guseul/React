import firebase from 'firebase';
import firebaseApp from './firebase';


class AuthService {

  //=== 로그인 ===
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

    //=== 로그아웃 ===
    logout(){
      firebase.auth().signOut();
    }

  //=== 로그인한 사용자 데이터 사용 ===
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }



}

export default AuthService;
