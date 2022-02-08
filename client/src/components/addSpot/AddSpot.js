// import { useState } from "react";
// import { useForm } from "react-hook-form";

// function EditCard() {
//   const { register, handleSubmit } = useForm();
//   const [result, setResult] = useState("");

//   return (
//     <form onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))}>
//       <Header />
//       <input {...register("name")} placeholder="Place name:" />
//       <input {...register("comment")} placeholder="Comment:" />
//       <input {...register("coordinates")} placeholder="Coordinates latitude:" />
//       <input
//         {...register("coordinates")}
//         placeholder="Coordinates longitude:"
//       />
//       <input {...register("images")} placeholder="Image url:" />
//       <p>{result}</p>
//       <input type="submit" />
//     </form>
//   );
// }
// export default PlaceCard;
////////////////////////////////////////////////////////
import { useContext, useState } from "react";
import "./addSpot.css";
import Button from "../Button";
import InputField from "../InputField";
import Form from "../Form";
import { onCreate } from "../../utils/utils";
import { AppContext } from "../../context";
//import INPUT_FIELDS from "../INPUT_FIELDS";

const INPUT_FIELDS = [
  {
    name: "name",
    placeholder: "Place Name:",
    type: "text",
  },
  {
    name: "comment",
    placeholder: "Comment:",
    type: "text",
  },
  {
    name: "coordinateLat",
    placeholder: "Coordinates latitude:",
    type: "text",
  },
  {
    name: "coordinateLong",
    placeholder: "Coordinates longitude:",
    type: "text",
  },
  {
    name: "images",
    placeholder: "Image URL:",
    type: "text",
  },
];

// const Form = ({ children, onSubmit }) => {
//   return <form onSubmit={onSubmit}>{children}</form>;
// };

// const InputField = ({ placeholder, ...attr }) => {
//   return (
//     <>
//       <label>{placeholder}</label>
//       <input {...attr} />
//     </>
//   );
// };

// const Button = ({ children, type }) => {
//   return <button type={type}>{children}</button>;
// };

function AddSpot() {
  const [inputsVal, setInputsVal] = useState({});
  const { isRefreshing } = useContext(AppContext);
  const { setIsRefreshing } = useContext(AppContext);
  // useEffect(() => {
  //   setInputsVal({
  //     ...place,
  //     coordinateLat: place.coordinates[0],
  //     coordinateLong: place.coordinates[1],
  //   });
  //   // setInputsVal({ ...place });
  // }, []);

  //setInputsVal(place);
  const handleInputs = ({ target: { name, value } }) => {
    setInputsVal({ ...inputsVal, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { comment, images, name } = inputsVal;
    const coordinates = [
      parseFloat(inputsVal.coordinateLat),
      parseFloat(inputsVal.coordinateLong),
    ];

    const MyBody = { name, comment, images, coordinates };

    console.log("MYbody", MyBody);
    onCreate(MyBody);
    setIsRefreshing(!isRefreshing);
  };

  return (
    <Form onSubmit={onSubmit} className="form">
      {INPUT_FIELDS.map((attr) => {
        return (
          <InputField
            key={attr.name}
            onChange={handleInputs}
            value={inputsVal[attr.name]}
            {...attr}
          />
        );
      })}
      <Button type={"submit"}>
        <span className="save-btn" aria-label="save" role="img">
          💾
        </span>
      </Button>
    </Form>
  );
}

export default AddSpot;
//export { EditCard };
