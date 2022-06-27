export default function ValidAccount(data) {
    const getValidation = async (data) => {
        try {
            const response = await fetch("http://localhost:8000/api/usertinknet?username="+data["username"]+"&password="+data["password"]);
            const json = await response.json();
            localStorage.setItem("token", json.token);
            window.location.replace("home");
        } catch(error) {
            alert(error);
        }
    }

    getValidation(data);
}