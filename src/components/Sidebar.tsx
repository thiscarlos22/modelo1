import React from "react";
import Image from "next/image";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoGitCommit,
  IoGitNetworkOutline,
  IoLogoFacebook,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";
import path from "path";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoLogoFacebook size={40} />,
    title: "Panel",
    subTitle: "Visualizacion",
  },
  {
    path: "/dashboard/counter",
    icon: <IoGitNetworkOutline size={40} />,
    title: "Presión",
    subTitle: "Contador Client Side",
  },
  {
    path: "/dashboard/pokemon",
    icon: <IoGitCommit size={40} />,
    title: "Avatar",
    subTitle: "Muestrame",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2"> </IoLogoReact>
          <span> Flamer </span>
          <span className="text-red-600"> Agricultor</span>
        </h1>

        <p className="text-slate-500 text-sm">Actividad</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Informame,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt=""
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Kika</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
