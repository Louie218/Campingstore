import ShopCard from "../components/ShopCard";
import Tent1 from "../assets/tent1.jpg";
import Tent2 from "../assets/tent2.jpg";
import Tent3 from "../assets/Tent3.jpg";
import Jacket1 from "../assets/Jacket1.jpg";
import Jacket2 from "../assets/Jacket2.jpg";
import Jacket3 from "../assets/Jacket3.jpg";

export default function ShopPage() {
  return (
    <>
      <h1 className="text-xl text-center font-semibold mt-6">Inventory</h1>
      <div className="grid max-[780px]:grid-cols-2 grid-cols-3 gap-4 mt-10 justify-items-center ">
        <ShopCard
          product={Tent1}
          description="Eurohike
Sendero 4 Family Tent"
          price="$150"
        />
        <ShopCard
          product={Tent2}
          description="Berghaus
Air 6.1 Nightfall Tent"
          price="$320"
        />
        <ShopCard
          product={Tent3}
          description="COLEMAN
Kentmere 3+ Blackout Tent"
          price="$250"
        />
        <ShopCard
          product={Tent3}
          description="COLEMAN
Kentmere 3+ Blackout Tent"
          price="$250"
        />
        <ShopCard
          product={Tent2}
          description="Berghaus
Air 6.1 Nightfall Tent"
          price="$320"
        />
        <ShopCard
          product={Tent1}
          description="Eurohike
Sendero 4 Family Tent"
          price="$150"
        />
        <ShopCard
          product={Jacket1}
          description="Montane
Men's Levity Gore-Tex® Jacket"
          price="$99.9"
        />
        <ShopCard
          product={Jacket2}
          description="Peter Storm
Men's Lakeside III 3-in-1Waterproof Jacket"
          price="$80.9"
        />
        <ShopCard
          product={Jacket3}
          description="Berghaus
Men's Breccan Insulated Parka Jacket"
          price="$230"
        />
      </div>
      <hr className="border-2 border-black mt-16 mb-4" mb-4 />
    </>
  );
}
