import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";
import { Phone, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="bg-white w-full">
      <nav className="container mx-auto py-5 px-80  flex justify-between items-center ">
        <div className="flex items-center">
          <Image
            className="mr-3"
            src="/logo.svg"
            alt="Logo"
            width={80}
            height={80}
          />
          <Select>
            <SelectTrigger className="w-[180px] focus:ring-0">
              <SelectValue placeholder="Select Restaurant" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cheesy delight">Cheesy Delight</SelectItem>
              <SelectItem value="pizza-hut">Pizza Hut</SelectItem>
              <SelectItem value="kids-corner">Kids corner</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-4">
          <ul className="flex item-center font-medium space-x-4">
            <li>
              {" "}
              <Link className=" hover:text-primary" href="/">
                Menu
              </Link>{" "}
            </li>
            <li className="hover:text-primary">
              {" "}
              <Link href="/">Order</Link>{" "}
            </li>
          </ul>
          <div className="relative">
            <Link className="hover:text-primary" href={"/cart"}>
              
              <ShoppingCart />
            </Link>
            <span className="absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center rounded-full bg-primary font-bold text-white ">
              3
            </span>
          </div>
          <div className="pl-4 flex items-center gap-x-2">
            <Phone/>
            <span> +91 9809898980</span>
          </div>
          <Button size={'sm'}>Logout</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
