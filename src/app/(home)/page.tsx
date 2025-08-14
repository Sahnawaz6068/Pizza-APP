import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";
import ProductCard, { Product } from "./components/ProductCard";

const product: Product[] = [
  {
    id: "1",
    name: "PizzaHut",
    description: "This is very testi pizza",
    image: "/pizza-main.png",
    price: 200,
  },
  {
    id: "1",
    name: "PizzaHut",
    description: "This is very testi pizza",
    image: "/pizza-main.png",
    price: 200,
  },
  {
    id: "1",
    name: "PizzaHut",
    description: "This is very testi pizza",
    image: "/pizza-main.png",
    price: 200,
  },
  {
    id: "1",
    name: "PizzaHut",
    description: "This is very testi pizza",
    image: "/pizza-main.png",
    price: 200,
  },
  {
    id: "1",
    name: "PizzaHut",
    description: "This is very testi pizza",
    image: "/pizza-main.png",
    price: 200,
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between  px-72 py-16 gap-12">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h1 className="md:text-5xl text-3xl font-black font-sans leading-snug">
              Super Delicious Pizza in
            </h1>
            <h1 className="lg:text-5xl text-3xl font-black font-sans leading-snug text-primary mt-2">
              Only 45 Minutes!
            </h1>

            <p className="text-2xl mt-8 max-w-lg leading-snug mx-auto md:mx-0">
              Enjoy a free Meal if Your Order Takes More Than 45 Minutes!
            </p>

            <Button className="mt-8 text-lg rounded-full py-6 px-8 font-bold">
              Get Your Pizza Now
            </Button>
          </div>

          {/* Right section */}
          <div>
            <Image
              src="/pizza-main.png"
              alt="Delicious Pizza"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="px-72 py-12">
          <Tabs defaultValue="pizza">
            <TabsList>
              <TabsTrigger value="pizza">Pizza</TabsTrigger>
              <TabsTrigger value="beverages">Beverages</TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {product.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="beverages">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {product.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
