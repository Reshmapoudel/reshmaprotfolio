import Image from "next/image";
import Head from "next/head";
import HomePage from "../components/LandingPage/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reshma Protfolio",
};
export default function Page() {
  return (
    <main className="">
      <HomePage />{" "}
    </main>
  );
}
