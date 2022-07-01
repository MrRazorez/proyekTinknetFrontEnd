import axios from "axios";

export default function ValidAccount(username, password) {
    const getValidation = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/usertinknet?username="+username+"&password="+password);
            localStorage.setItem("token", response.data.token);
            window.location.replace("/home");
        } catch(error) {
            alert(error);
        }
    }

    getValidation();
}