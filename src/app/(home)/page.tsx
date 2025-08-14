import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
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
  );
}
