import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePost = () => {
    const post: any = useLoaderData();
    const [img, setImg] = useState(false);
    console.log(img);
    
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'travelBlogImage');
        if (img) {            
            fetch("https://api.cloudinary.com/v1_1/drjshrj1b/image/upload", {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(image => {
                    data.image = image.secure_url;
                    fetch('http://localhost:5000/posts', {
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
        } else {
            console.log("else", data);
        }
    }
    return (
        <div>
            <div className='d-flex justify-content-between mb-5'>
                <h2 className='fw-bold'>Update this post</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input {...register('title')} defaultValue={post.title} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" {...register('content')} defaultValue={post.content} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Add a image</label>
                    <input type="file" {...register('image')} onChange={()=> setImg(true)} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default UpdatePost;