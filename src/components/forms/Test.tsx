import { useForm } from "react-hook-form";

const Test = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    }
    return (
        <div>
            <div className='d-flex justify-content-between mb-5'>
                <h2 className='fw-bold'>Add a new post</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input {...register('title')} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" {...register('content')} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Add a image</label>
                    <input type="file" {...register('image')} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Share</button>
            </form>
        </div>
    );
};

export default Test;