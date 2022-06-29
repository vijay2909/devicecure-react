import axios from "axios";

const instance = axios.create(
    {
        baseURL: "https://staging.devicecure.in/"
    }
)
export default instance