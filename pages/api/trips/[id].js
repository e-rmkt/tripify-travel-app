import Trip from "@/db/models/Trip";
import connect from "@/db/connect";

export default async function handler(request, response) {
  await connect();
  const { id } = request.query;

  if (request.method === "GET") {
    const trip = await Trip.findById(id);
    console.log(trip);

    if (!trip) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(trip);
  } else if (request.method === "PUT") {
    try {
      const updatedTrip = request.body;
      await Trip.findByIdAndUpdate(id, updatedTrip);
      return response
        .status(200)
        .json({ status: `Trip ${id} successfully updated!` });
    } catch (error) {
      console.error("PUT /api/trips/:id", error);
      return response.status(500).json({ message: "Error updating trip" });
    }
  } else if (request.method === "DELETE") {
    try {
      const trip = await Trip.findByIdAndDelete(id);
      response.status(200).json(trip);
    } catch (error) {
      console.log("DELETE /api/trips/:id", error);
      response.status(500).json({ message: "Error deleting service" });
    }
    return;
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
