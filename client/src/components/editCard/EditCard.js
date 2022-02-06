import { useState } from "react";
import { useForm } from "react-hook-form";

function EditCard() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))}>
      <Header />
      <input {...register("name")} placeholder="Place name:" />
      <input {...register("comment")} placeholder="Comment:" />
      <input {...register("coordinates")} placeholder="Coordinates latitude:" />
      <input
        {...register("coordinates")}
        placeholder="Coordinates longitude:"
      />
      <input {...register("images")} placeholder="Image url:" />
      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
export default PlaceCard;
