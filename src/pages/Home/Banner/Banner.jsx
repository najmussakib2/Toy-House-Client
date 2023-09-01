

const Banner = () => {
  return (
    <div className="md:h-[calc(100vh-69px)] grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4 my-8 md:my-0">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="space-y-4"
      >
        <h2 className="text-2xl md:text-4xl text-gray-500 font-extrabold">
          Unlock the Joy with our Action Toys
        </h2>
        <p className="text-gray-500">
          Welcome to ToyHouse, your ultimate destination for action toys
          that spark curiosity.Toys are a big part of the development of children and how they approach the world. The right toys can make such a big difference in the way that a child sees things and how they navigate their own space. At Action Toys, we work to provide kids with toys that they are going to have a great time with.Fuel your childs imagination and watch them grow while
          having fun with our carefully curated selection of toys. Join us on
          this exciting journey of exploration and discovery!
        </p>
        <button className="btn btn-active btn-ghost btn-wide btn-sm md:btn-md">
          More Info
        </button>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="md:ml-auto"
      >
        <img className="rounded-md" src={"https://www.action-figure-resource.com/images/TgMnPlR.jpg"} alt="" />
      </div>
    </div>
  );
};

export default Banner;
