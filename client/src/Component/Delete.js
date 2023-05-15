import { useNavigate, useParams } from "react-router-dom";

function Delete() {
  fetch("/delete", {
    method: "PUT",
    body: { id: useParams("id") },
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const navigate = useNavigate();

  return navigate("/");
}
export default Delete;
