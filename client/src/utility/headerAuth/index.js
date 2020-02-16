import firebase from 'firebase/app';

const headerAuth = async () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                resolve({
                    headers: {
                        'authorization': `Bearer ${user._lat}`,
                    }
                });
            }
        });
    });
};

export default headerAuth;