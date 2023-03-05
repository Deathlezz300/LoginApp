export const initialState={
    status:'checking',
    uid:null,
    email:null,
    displayName:null,
    photoURL:null,
    errorMessage:null
}

export const AuthenticatedState={
    status:'authenticated',
    uid:'123ABC',
    email:'demo@google.com',
    displayName:'Demo user',
    photoURL:'https://demo.jpg',
    errorMessage:null
}

export const notAuthenticatedState={
    status:'not-authenticated',
    uid:null,
    email:null,
    displayName:null,
    photoURL:null,
    errorMessage:null
}

export const DemoUser={
    status:'authenticated',
    uid:'123ABC',
    email:'demo@google.com',
    displayName:'Demo user',
    photoURL:'https://demo.jpg',
    errorMessage:null
}

