import { useEffect, useState } from "react";
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {
  const [subCat, setSubCat] = useState("Avengers");
  const [subCatData, setSubCatData] = useState();

  useEffect(() => {
    fetch(
      `https://toys-for-server-nnsnajmussakib-gmailcom-sakib13.vercel.app/toys-subCat?subCat=${subCat}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSubCatData(data);
      })
      .catch((error) => console.log(error));
  }, [subCat]);

  return (
    <div className="space-y-8 mt-16 md:mt-2 mb-8 md:mb-16">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="space-y-4"
      >
        <div className="md:w-[70%] md:mx-auto md:text-center space-y-4">
          <h2 className="text-2xl md:text-4xl text-gray-500 font-extrabold">
            Action and Adventure Toys
          </h2>
          <p className="text-gray-500">
            Explore our collection of Action toys designed to inspire childrens
            development. All of our toys are for sale online and can be shipped right to your home.We can help your child learn and grow and have a great time doing it. We offer a wide range of toys that fit both the needs of your child and their interests. 
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="tabs">
            <a
              onClick={() => setSubCat("Avengers")}
              className={`tab tab-sm md:tab-lg tab-lifted ${
                subCat === "Avengers" && "tab-active"
              }`}
            >
              Avengers
            </a>
            <a
              onClick={() => setSubCat("Star Wars")}
              className={`tab tab-sm md:tab-lg tab-lifted ${
                subCat === "Star Wars" && "tab-active"
              }`}
            >
              Star Wars
            </a>
            <a
              onClick={() => setSubCat("Others")}
              className={`tab tab-sm md:tab-lg tab-lifted ${
                subCat === "Others" && "tab-active"
              }`}
            >
              Others
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {subCatData &&
          subCatData.map((toy) => (
            <ShopByCategoryCard key={toy._id} toy={toy}></ShopByCategoryCard>
          ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
