import { jokes } from "@/lib/data";

export default function handler(request, response) {
  const { jokeId } = request.query;

  const joke = jokes.find((joke) => joke.id === jokeId);

  if (!joke) {
    response.status(404).json({ status: "Not found." });
    return;
  }

  response.status(200).json(joke);
}
