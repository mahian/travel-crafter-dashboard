import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const AllPost = () => {
    const { data: posts = [], refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/posts');
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = (id:any)=>{
        fetch(`http://localhost:5000/posts/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            refetch();
            console.log(res)
        })
    }
    console.log(posts);
    

    return (
        <div>
            <div className='d-flex justify-content-between mb-5'>
                <h2 className='fw-bold'>All Blogs</h2>
                <Link to="../add-post">
                    <button type="button" className="btn btn-primary">
                        Add New post
                        <span className='ms-3'><i className="fa-sharp fa-solid fa-circle-plus"></i></span>
                    </button>
                </Link>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post: any, index: number) => (
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td> <img style={{ height: "60px", width: "100px", objectFit: "cover"}} src={post.imageUrl} alt="" /></td>
                                    <td>{post.title}</td>
                                    <td>{post.date}</td>
                                    <td>
                                        <button onClick={()=> handleDelete(post._id)} type="button" className="btn btn-danger btn-sm me-3">Delete</button>
                                        <Link to="../update-post"><button type="button" className="btn btn-success btn-sm">Update</button></Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPost;