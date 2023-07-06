const Hero = ({ title }) => {
  return (
    <div
      className="hero h-[150px] md:h-[250px]"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1563209259-2819dbb22d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
