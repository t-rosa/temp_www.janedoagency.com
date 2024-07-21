import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "./sanity.api";

const client = createClient({ projectId, dataset, apiVersion, useCdn });

export default client;
