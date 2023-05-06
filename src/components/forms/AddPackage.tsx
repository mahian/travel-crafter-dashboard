import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddPackage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'travelPackageImage');        
        fetch("https://api.cloudinary.com/v1_1/drjshrj1b/image/upload", {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                data.image = image.secure_url;
                fetch('http://localhost:5000/package', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => {
                        if (response.ok) {
                            Swal.fire(
                                'Good job!',
                                'You clicked the button!',
                                'success'
                            )
                            console.log(response);
                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            })
            .catch(res => console.log(res))
    }
    return (
        <div>
            <div className='d-flex justify-content-between mb-5'>
                <h2 className='fw-bold'>Add a new package</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input {...register('name')} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Destination</label>
                    <input {...register('destination')} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" {...register('content')} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" {...register('price')} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Add a image</label>
                    <input type="file" {...register('image')} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Upload</button>
            </form>
        </div>
    );
};

export default AddPackage;