"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen bg-white flex justify-center items-center">
      <div className="w-[400px] h-[500px] flex flex-col items-center gap-y-4 py-4">
        <p className="font-bold text-xl text-violet-600 text-center">
          لقد قمت بالدفع بنجاح، يمكنك تحديث المستخدم عبر chargily webhook
        </p>

        <div className="w-full h-[100px] flex items-center justify-center gap-x-4">
          <Link
            target="_blank"
            href={"https://github.com/chrhi/chargily-template"}
          >
            code on github
          </Link>
          <Link href={"/"}>home</Link>
        </div>
      </div>
    </main>
  );
}
