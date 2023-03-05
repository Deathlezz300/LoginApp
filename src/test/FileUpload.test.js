/** @jest-environment jsdom */

import { fileUpload } from "../Journal/helpers/fileUpload";

describe("Pruebas en FileUpload",()=>{
    test("Debe de subir el archivo correctamente",async()=>{

        const imageUrl="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800";
        const resp= await fetch(imageUrl);
        const blob= await resp.blob();
        const file=new File([blob],'foto.jpg');
        const url= await fileUpload(file)
        expect(typeof(url)).toBe('string');

    });
});