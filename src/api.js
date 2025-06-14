import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Base URL backend

// GET Contacts
export const getContacts = async () => {
  try {
    const response = await axios.get(`${API_URL}/contacts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return []; // Mengembalikan array kosong jika gagal
  }
};

// ADD Contact
export const addContact = async (name, email, phone, message) => {
  try {
    const response = await axios.post(`${API_URL}/contacts`, {
      name,
      email,
      phone,
      message,
    });
    console.log("Response from server:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding contact:", error);
    return null;
  }
};

// GET Products
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
