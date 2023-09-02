

const Hero2 = () => {
    return (
        <div>
            <div className="hero min-h-screen rounded-md mb-20" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1191499704/photo/dollhouse.jpg?s=612x612&w=0&k=20&c=4abdGPX9I-kiNiXuM9H8INw506aH-R9SWf9jCTChxfA=)'}}>
                <div className="hero-overlay bg-opacity-60 rounded-md"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Action Figures!</h1>
                    <p className="mb-5">Toy House is an online action figure store with the largest lineup of collectible action figures on the Internet, with new arrivals being added to our stock daily.</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Hero2;