// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false, 
  firebase : {
    apiKey: "AIzaSyAJ6TyVs2RlDQu3Z8lFuin1vWYexCzC7x4",
    authDomain: "todolistapp-6d191.firebaseapp.com",
    databaseURL: "https://todolistapp-6d191.firebaseio.com",
    projectId: "todolistapp-6d191",
    storageBucket: "todolistapp-6d191.appspot.com",
    messagingSenderId: "969489661163"
  }
};
