

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                    <img src="https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWN0aW9uJTIwZmlndXJlfGVufDB8fDB8fHww&w=1000&q=80" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-4xl text-gray-500 font-extrabold">
                        Unlimited action toys for your kids
                        </h2>
                        <p className="py-6 text-gray-500">Welcome to ToyHouse, your ultimate destination for action toys that spark curiosity.Toys are a big part of the development of children and how they approach the world. The right toys can make such a big difference in the way that a child sees things and how they navigate their own space. At Action Toys, we work to provide kids with toys that they are going to have a great time with.Fuel your childs imagination and watch them grow while having fun with our carefully curated selection of toys. Join us on this exciting journey of exploration and discovery!</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;