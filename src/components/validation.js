import axios from "axios";

export default function ValidAccount(username, password) {
    const getValidation = async () => {
        try {
            await axios.post("http://localhost:8000/api/usertinknet",{
                username: username,
                password: password
            })
            .then(
                function (response) {
                    localStorage.setItem("token", response.data.token);
                    window.location.replace("/home");
                }
            );
        } catch(error) {
            alert(error);
        }
    }

    getValidation();
}