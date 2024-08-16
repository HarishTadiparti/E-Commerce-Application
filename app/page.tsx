import ProductCard from "@/components/custom/product-card";
import Image from "next/image";


const productsList = [
  {
    title: "Air Jorden 1 Low SE",
    category: "Men's Shoes",
    price: 11495,
    imageURL: "AIR-JORDAN-1-LOW-SE.jpeg"
  },
  {
    title: "Nike Air Force 1 07",
    category: "Men's Shoes",
    price: 9695,
    imageURL: "AIR-FORCE-1-07-BLACK.png"
  },
  {
    title: "Nike Air Force 1 07",
    category: "Men's Shoes",
    price: 7496,
    imageURL: "AIR-FORCE-1-07.png"
  },
  {
    title: "Jumpman MVP",
    category: "Men's Shoes",
    price: 15295,
    imageURL: "JORDAN-MVP.png"
  },
  {
    title: "Nike Court Vision Low",
    category: "Men's Shoes",
    price: 5695,
    imageURL: "NIKE-COURT-VISION-LO.png"
  },
  {
    title: "Air Jorden 1 Low SE",
    category: "Men's Shoes",
    price: 5695,
    imageURL: "WMNS-AIR-JORDAN-1-LOW-SE.png"
  },
]
export default function Home() {
  return (
    <div className="pt-1 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
          productsList.map((object, idx: number) => (
            <ProductCard key={idx} title={object.title} price={object.price} category={object.category} imageURL={object.imageURL} />
          ))
        }
      </div>

    </div>
  );
}
