import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN as string;

export async function getUser() {
    try {
        const response = await axios.get(`${baseUrl}/user/info`, {
            headers: {
                "token": token,
                "Content-Type": "application/json"
            },
            data: {
                email: "ovickbs@gmail.com",
                password: "qwerpilkopi"
            }
        });

        return response.data;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}
