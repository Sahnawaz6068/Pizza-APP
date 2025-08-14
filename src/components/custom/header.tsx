import React from "react";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="container mx-auto py-5 ml-38 ">
        <div className="flex items-center">
          <Image className="mr-3" src="/logo.svg" alt="Logo" width={80} height={80} />
        <Select>
          <SelectTrigger className="w-[180px] focus:ring-0">
            <SelectValue placeholder="Select Restaurant" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cheesy delight">Cheesy Delight</SelectItem>
            <SelectItem value="pizza-hut">Pizza Hut</SelectItem>
            <SelectItem value="kids-corner">Kids  corner</SelectItem>
          </SelectContent>
        </Select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
