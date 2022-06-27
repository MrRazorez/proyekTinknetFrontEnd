export default function Decision() {
    (localStorage.getItem("token"))? window.location.replace("home"): window.location.replace("login");
}