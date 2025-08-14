import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
            ></Image>
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
          <Button className=" text-sm rounded-full py-2 px-4 bg-orange-200 font-bold">
            choose
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
