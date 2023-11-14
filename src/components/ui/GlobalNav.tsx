"use client";

import { CardanoWallet } from "@meshsdk/react";
import Image from "next/image";
import Link from "next/link";
import { andamioConfig } from "../../andamio/config";

const GlobalNav = () => (
  <div className="card bg-primary text-primary-content font-mono shadow-xl mx-5 mt-5 z-10">
    <div className="navbar">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          <Image src="/andamio.png" height={40} width={40} alt="andamio" />
          {andamioConfig.title}
        </Link>
      </div>
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link href={"/course"}>{`Start ${andamioConfig.title} Course`}</Link>
        </li>
        <li>
          <Link href={"/course-management"}>Course Management</Link>
        </li>
        <li>
          <Link href={"/contributor-platform"}>Contributor Platform</Link>
        </li>
      </ul>
      <div className="ml-5">
      <CardanoWallet />

      </div>
    </div>
  </div>
);

export default GlobalNav;