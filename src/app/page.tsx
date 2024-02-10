"use client";

import { useChargily } from "@/hooks/use-chargily";
import { useState } from "react";

export default function Home() {
  const { pay } = useChargily();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <main className="w-full h-screen bg-white flex justify-center items-center">
      <div
        dir="rtl"
        className="w-[400px] h-[500px] flex flex-col items-center gap-y-4 py-4"
      >
        <p className="font-bold text-xl text-violet-600 text-center">
          انقر فوق الزر أدناه سيتم إعادة توجيهك إلى صفحة الخروج حيث يمكنك اختبار
          الدفع إذا تمت إعادة توجيه النجاح إليه صفحة النجاح
        </p>

        <button
          className="bg-violet-500 text-white p-4 rounded-xl "
          onClick={async () => {
            setIsLoading(true);
            await pay({
              product_name: "product",
              product_price: 4000,
            });
            setIsLoading(false);
          }}
        >
          {isLoading ? "loading..." : "pay now"}
        </button>
      </div>
    </main>
  );
}
