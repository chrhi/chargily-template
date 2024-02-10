"use client";

import {
  create_checkout,
  create_price,
  create_product,
} from "@/lib/actions/chargily-actions";

import { useRouter } from "next/navigation";

interface Product_details {
  product_name: string;
  product_price: number;
}

export const useChargily = ({
  product_name,
  product_price,
}: Product_details) => {
  const router = useRouter();

  const pay = async () => {
    console.log("function fired");
    try {
      const product = await create_product({ product_name });

      console.log("this is the product");
      console.log(product);

      if (!product) throw new Error("failed to create a product");

      const price = await create_price({
        amount: product_price,
        product_id: product?.id,
      });
      console.log("this is a price");
      console.log(price);

      if (!price) throw new Error("failed to create a price");

      const checkout = await create_checkout({
        price_id: price.id,
        success_url: "https://jadara.vercel.app",
      });
      console.log("this is a checkout");
      console.log(checkout);

      if (!checkout?.checkout_url)
        throw new Error("failed to create a checkout");
      router.push(checkout?.checkout_url);
    } catch (err) {
      console.error(err);
    }
  };

  return { pay };
};
