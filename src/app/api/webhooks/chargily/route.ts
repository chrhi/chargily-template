import { NextRequest } from "next/server";
import crypto from "crypto";

const GET_API_KEY = () => {
  const key = process.env.CHARGILY_SECRET_KEY;
  if (!key) throw new Error("chargily api key is not provided");
  return key;
};
export async function POST(request: NextRequest) {
  const signature = request.nextUrl.searchParams.get("signature");
  const payload = await request.json();

  // If there is no signature, ignore the request
  if (!signature) {
    return new Response(
      JSON.stringify({
        status: "failed",
        message:
          "you are not chargilt why do want to do something bad  You will be held accountable on the Day of Resurrection",
      })
    );
  }

  // Calculate the signature
  const computedSignature = crypto
    .createHmac("sha256", GET_API_KEY())
    .update(payload)
    .digest("hex");

  // If the calculated signature doesn't match the received signature, ignore the request
  if (computedSignature !== signature) {
    return new Response(
      JSON.stringify({
        status: "failed",
        message:
          "you are not chargilt why do want to do something bad  You will be held accountable on the Day of Resurrection",
      })
    );
  }

  // If the signatures match, proceed to decode the JSON payload

  // Switch based on the event type
  switch (payload) {
    case "checkout.paid":
      console.log("from the webhook");
      console.log("siyad raho khalass ");
      break;
    case "checkout.failed":
      console.log("from the webhook");
      console.log("siyad raho makhalassch");
      break;
  }

  return new Response(
    JSON.stringify({
      status: "success",
      message:
        "you are not chargilt why do want to do something bad  You will be held accountable on the Day of Resurrection",
    })
  );
}
