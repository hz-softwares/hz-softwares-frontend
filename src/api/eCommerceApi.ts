import axios from "axios";
import { E_COMMERCE_API_URL } from "../constants/urls";

export const eCommerceApi = axios.create({
	baseURL: E_COMMERCE_API_URL,
	timeout: 10000,
	headers: { "Content-Type": "application/json" },
});
