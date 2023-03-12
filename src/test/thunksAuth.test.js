/** @jest-environment jsdom */
import { checkingCredentials, login } from "../store/auth/authslice";
import { DemoUser } from "./fixtures/authFixtures";
import { singInWithGoogle } from "../firebase/providers";
import { startGoogleSign } from "../store/auth/thunks";

jest.mock('../firebase/providers.js');

describe("Pruebas en AuthThunks",()=>{


    const dispatch=jest.fn();

    beforeEach(()=>jest.clearAllMocks());


    test("Debe invocar checking credentials",()=>{
        const valor=checkingCredentials();
        expect(valor).toEqual(checkingCredentials());
    });

    test("startGoogleSignIn debe llamar checkingCredentials y login -Exito",async()=>{

        const loginData={ok:true,...DemoUser};
        await singInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSign()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        

    });



});