import connect from "@/db/connect";
import Trip from "@/db/models/Trip";

export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    const trips = await Trip.find();
    return response.status(200).json(trips);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
