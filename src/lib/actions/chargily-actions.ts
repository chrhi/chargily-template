"use server";

const CHARGILY_BASE_URL = "https://pay.chargily.net/test/api/v2" as const;

// create a product
export const create_product = async ({
  product_name,
}: {
  product_name: string;
}): Promise<Product | undefined> => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CHARGILY_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: product_name }),
  };

  try {
    const response = await fetch(`${CHARGILY_BASE_URL}/products`, options);
    const data = (await response.json()) as Product;

    return data;
  } catch (err) {
    console.error(err);
  }
};

// create a price
export const create_price = async ({
  amount,
  product_id,
}: {
  amount: number;
  product_id: string;
}): Promise<Price | undefined> => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CHARGILY_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount, currency: "dzd", product_id }),
  };

  try {
    const response = await fetch(`${CHARGILY_BASE_URL}/prices`, options);
    const data = (await response.json()) as Price;

    return data;
  } catch (err) {
    console.error(err);
  }
};

// Create a Checkout

export const create_checkout = async ({
  price_id,
  success_url,
}: {
  price_id: string;
  success_url: string;
}): Promise<Checkout | undefined> => {
  const payload = { items: [{ price: price_id, quantity: 1 }], success_url };
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CHARGILY_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  try {
    const response = await fetch(`${CHARGILY_BASE_URL}/checkouts`, options);
    const data = (await response.json()) as Checkout;

    return data;
  } catch (err) {
    console.error(err);
  }
};
