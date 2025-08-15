import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

type PropType = { product: Product };

const ProductCard = ({ product }: PropType) => {
  return (
    <div>
      <Card className="border-none rounded-xl">
        <CardHeader className="flex items-center justify-center">
          <CardTitle>
            <Image
              alt="Pizza imgae"
              width={150}
              height={150}
              src={product.image}
            />
          </CardTitle>
        </CardHeader>

        <CardContent>
          <h1 className="text-xl">{product.name}</h1>
          <p>{product.description}</p>
        </CardContent>

        <CardFooter className="flex justify-between items-center">
          <p>
            <span>From </span>
            <span className="font-semibold">₹{product.price} </span>
          </p>

          <Dialog>
            <DialogTrigger className=" text-sm rounded-full py-2 px-4 bg-orange-200 font-bold">
              choose
            </DialogTrigger>

            <DialogContent className="p-0">
              <div className="flex ">
                <div className="w-1/3 bg-white p-4 flex items-center justify-center rounded-md">
                  <Image
                    alt={product.name}
                    width={350}
                    height={350}
                    src={product.image}
                  />
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="mt-1">{product.description}</p>

                  <div>
                
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
