"use client";

import { useChargily } from "@/hooks/use-chargily";
import { useState } from "react";

export default function Home() {
  const { pay } = useChargily({
    product_name: "product",
    product_price: 4000,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <main className="w-full h-screen bg-white flex justify-center items-center">
      <div className="w-[400px] h-[500px] flex flex-col items-center gap-y-4 py-4">
        <p>this is a test</p>

        <button
          className="bg-blue-500 text-white p-4 rounded-xl "
          onClick={async () => {
            setIsLoading(true);
            await pay();
            setIsLoading(false);
          }}
        >
          {isLoading ? "loading..." : "pay now"}
        </button>
      </div>
    </main>
  );
}
