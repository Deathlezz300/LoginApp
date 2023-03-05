
export const fileUpload=async(file)=>{

    const cloudUrl='https://api.cloudinary.com/v1_1/react-cosas20/upload';

    const formData=new FormData();
    formData.append('upload_preset','journal-react');
    formData.append('file',file);

    try{
        const resp=await fetch(cloudUrl,{
            method:'POST',
            body:formData
        })

        const CloudResp=await resp.json();

        return CloudResp.secure_url;

    }catch(error){
        return null;
    }


}