import Trip from "@/db/models/Trip";
import connect from "@/db/connect";

export default async function handler(request, response) {
  await connect();
  const { id } = request.query;

  if (request.method === "GET") {
    const trip = await Trip.findById(id);

    if (!trip) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(trip);
  }
  if (request.method === "DELETE") {
    await Trip.findByIdAndDelete(id);
    response.status(200).json({ status: `Trip ${id} successfully deleted.` });
  }
  return;
}
