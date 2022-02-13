import { useContext, useState } from "react";
import "./addSpot.css";
import Button from "../Button";
import InputField from "../InputField";
import Form from "../Form";
import { onCreate } from "../../utils/utils";
import { AppContext } from "../../context";

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

function AddSpot() {
  const [inputsVal, setInputsVal] = useState({});
  const { isRefreshing } = useContext(AppContext);
  const { setIsRefreshing } = useContext(AppContext);

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
