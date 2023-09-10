

import { type ApiSpaceXRes } from "../types/api.type";



export async function getLanchesApi() {

  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 10,
      },
    }),
  });
  
  
  const { docs: launches } = (await res.json()) as ApiSpaceXRes;
  return launches;
}