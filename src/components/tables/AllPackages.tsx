import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const AllPackages = () => {
    const { data: packages = [], refetch } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/packages');
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = (id: any) => {        
        fetch(`http://localhost:5000/packages/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                refetch();
                console.log(res)
            })
    }
    console.log(packages);
    

    return (
        <div>
            <div className='d-flex justify-content-between mb-5'>
                <h2 className='fw-bold'>All Packages</h2>
                <Link to="../add-package">
                    <button type="button" className="btn btn-primary">
                        Add New Packages
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
                            <th scope="col">Name</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            packages.map((pkg: any, index: number) => (
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td> <img style={{ height: "60px", width: "100px", objectFit: "cover" }} src={pkg.image} alt="" /></td>
                                    <td>{pkg.name}</td>
                                    <td>{pkg.destination}</td>
                                    <td>
                                        <button onClick={() => handleDelete(pkg._id)} type="button" className="btn btn-danger btn-sm me-3">Delete</button>
                                        <Link to="../update-package"><button type="button" className="btn btn-success btn-sm">Update</button></Link>
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

export default AllPackages;