/** @jest-environment jsdom */
import {v2 as cloudinary} from 'cloudinary';
import { fileUpload } from "../Journal/helpers/fileUpload";

cloudinary.config({
    cloud_name:'react-cosas20',
    api_key:'656753894786552',
    api_secret:'orZyE2sjUSIkLhiRqzGbC2-rrhk',
    secure:true
})

describe("Pruebas en FileUpload",()=>{
    test("Debe de subir el archivo correctamente",async()=>{

        const imageUrl="https://images.pexels.com/photos/1447092/pexels-photo-1447092.png?cs=srgb&dl=pexels-thanhhoa-tran-1447092.jpg&fm=jpg";
        const resp= await fetch(imageUrl);
        const blob= await resp.blob();
        const file=new File([blob],'foto.jpg');
        const url= await fileUpload(file)
        expect(typeof(url)).toBe('string');
        const segments=url.split('/');
        const imageId=segments[segments.length-1].replace('.jpg','');

        await cloudinary.api.delete_resources(['journal-app/'+imageId]);
    });

    test("Debe retornar null",async()=>{

        const file=new File([],'foto.jpg');
        const url=await fileUpload(file);
        expect(url).toBe(null);

    });

});