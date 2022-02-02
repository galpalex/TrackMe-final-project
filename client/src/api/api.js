import axios from "axios";

let url = "http://localhost:8080/";

if (process.env.NODE_ENV === "production") {
  url = "/";
}

export default axios.create({
  baseURL: url,
});
