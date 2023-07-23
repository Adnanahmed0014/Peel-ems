import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: 
    "skJKHMVQLtqXFQakZNVUr7iFEAEIAlzNFmvDLTLpplzYYM4e1LamekJq1cOlPDoqB64eOnt5hs2RqsYDmwroWawQNkDqGu8L1Hv3VK6B8xIanTCKvuAdVp7a7dhw4fcBMgkYXoRonw8I2BlinxOx0WqY1HK4P8ibcz8edYDJtuRrEeOvPoXG"
})
