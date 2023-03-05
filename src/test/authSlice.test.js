/** @jest-environment jsdom */
import { authSlice, logout } from "../store/auth/authslice";
import { DemoUser, initialState, notAuthenticatedState } from "./fixtures/authFixtures";
import { login } from "../store/auth/authslice";

describe("Pruebas  en el authSlice",()=>{
    test("Debe regresar el estado inicial y llamarse auth",()=>{
        expect(authSlice.name).toBe('auth');
        const state=authSlice.reducer(initialState,{});
        expect(state).toEqual(initialState);
    });

    test("Debe realizar la autenticacion",()=>{

        const state=authSlice.reducer(initialState,login(DemoUser));
        expect(state).toEqual(DemoUser);
    });

    test("Debe realizar el logout sin argumentos",()=>{
        const state=authSlice.reducer(initialState,logout());
        expect(state).toEqual(notAuthenticatedState);
    })

    test("Debe realizar un logout y mostrar un mensaje de error",()=>{
        const errorMessage="logout exitoso";

        const state=authSlice.reducer(initialState,logout(errorMessage));
        expect(state).toEqual({
            ...notAuthenticatedState,
            errorMessage
        })

    })

})