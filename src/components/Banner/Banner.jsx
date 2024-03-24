import bgProfile from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-500">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bgProfile} className="max-w-sm rounded-lg " />
                <div className=''>
                    <h1 className="w-8/12 text-5xl font-bold">One Step Closer To Your <span className='text-purple-400'>Dream Job</span> </h1>
                    <p className="w-80 py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;