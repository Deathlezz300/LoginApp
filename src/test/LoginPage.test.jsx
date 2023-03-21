/** @jest-environment jsdom */
import { screen, render, fireEvent } from "@testing-library/react";
import { LoginPage } from "../auth/pages/LoginPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../store/auth/authslice";
import { MemoryRouter } from "react-router-dom";
import { notAuthenticatedState } from "./fixtures/authFixtures";

const mockstartGoogleSign=jest.fn();
const mockStartLoginWithEmailPassword=jest.fn();

jest.mock('../store/auth/thunks',()=>({
    startGoogleSign:()=>mockstartGoogleSign,
    startLoginWithEmailPassword:({email,password})=>{
        return ()=>mockStartLoginWithEmailPassword({email,password});
    }
}));

jest.mock('react-redux',()=>({
    ...jest.requireActual('react-redux'),
    useDispatch:()=>(fn)=>fn(),
}));

describe("Test en el componente LoginPage",()=>{

    beforeEach(()=>jest.clearAllMocks());

    const store=configureStore({
        reducer:{
            auth:authSlice.reducer
        },
        preloadedState:{
            auth:notAuthenticatedState
        }
    });


    test("Debe mostrar el componente correctamente",()=>{
        render(<Provider store={store}>
            <MemoryRouter>
                <LoginPage/>
            </MemoryRouter>
        </Provider>)

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1)
    });


    test("Boton de google debe llamar al startGoogleSignIn",()=>{
        render(<Provider store={store}>
            <MemoryRouter>
                <LoginPage/>
            </MemoryRouter>
        </Provider>)

        const googleBtn=screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);

        expect(mockstartGoogleSign).toHaveBeenCalled();

    });

    test("Disparar el login del submit con el formulario",()=>{
        
        const email="usuario@gmail.com";
        const password="hola12345";
        
        render(<Provider store={store}>
            <MemoryRouter>
                <LoginPage/>
            </MemoryRouter>
        </Provider>)

        const emailFiled=screen.getByRole('textbox',{name:'Correo'});

        fireEvent.change(emailFiled,{target:{name:'email',value:email}});

        const passwordFiled=screen.getByTestId('password');
        fireEvent.change(passwordFiled,{target:{name:'password',value:password}});

        const loginForm=screen.getByLabelText('formulario');
        fireEvent.submit(loginForm);


        expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
            email,
            password
        })

    });

});