import connect from "@/db/connect";
import Trip from "@/db/models/Trip";

export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    const trips = await Trip.find();
    return response.status(200).json(trips);
  }

  if (request.method === "POST") {
    try {
      const tripData = request.body;
      await Trip.create(tripData);

      response.status(201).json({ status: "Trip created" });
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }
}
