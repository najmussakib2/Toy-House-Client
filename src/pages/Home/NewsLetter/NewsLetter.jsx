import newsLatter from '../../../assets/photos/newslatter.gif'

const NewsLetter = () => {
    return (
        <div>
            <div className=" mx-auto md:grid md:grid-cols-3 md:gap-4 md:justify-center md:items-center space-y-8 mb-12">
        <div className="text-start md:col-span-2 space-y-2">
          <h2 className="text-gray-500 text-xl md:text-3xl font-extrabold">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-500">
            If you want to stay up-to-date with our latest toys, joining our
            weekly newsletter is the perfect way to do it. By signing up, you'll
            receive exclusive access to new and exciting toys. Whether you're our regular customer or
            just random visitor, our newsletter is packed with tips, tricks, and
            awesome toys that are sure to excite you. So why wait?
            Sign up today and start exploring all the awesome toys that our
             team has to offer!
          </p>
          <input
            className="md:w-[50%] border border-stone-300 bg-gray-100 rounded-md py-2 pl-2"
            id="email1"
            type="email"
            placeholder="name@company.com"
          />
          <button className="flex gap-2 text-white border border-gray-500 bg-gray-500 hover:bg-blue-600 font-medium rounded-md text-sm text-center px-4 py-2">
            <span>Submit</span>
            
          </button>
        </div>
        <div>
          <img className="h-96" src={newsLatter} alt="" />
        </div>
      </div>
        </div>
    );
};

export default NewsLetter;