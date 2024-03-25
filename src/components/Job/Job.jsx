import React from 'react';

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>

                    <div className=''>
                        <button className=' text-xl text-white mr-6 btn btn-success'>{remote_or_onsite}</button>
                        <button className='text-xl text-white btn btn-success'>{job_type}</button>
                    </div>
                    <div className='flex text-xl font-bold'>
                        <p>{location}</p>
                        <p>{salary}</p>
                    </div>

                    <div className="card-actions">
                        <button className="btn btn-primary ">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;