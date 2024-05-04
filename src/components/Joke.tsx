import { useState } from "react";
import Button from "./Button/Button";
import styles from "./PlanningToObject.module.scss";
import SwitchControl from "./SwitchControl";
import { InputContainer } from "../RSVP_Form/Inputs/Common";

const Joke = () => {
  // state show joke
  const [showJoke, setShowJoke] = useState(false);

  return (
    <InputContainer>
      <SwitchControl
        label="Would you like to hear a joke about mayonnaise?"
        defaultValue={showJoke}
        onCheckedChange={(value) => {
          setShowJoke(value);
        }}
      />
      {showJoke && (
        <>
          <video
            playsInline
            autoPlay
            style={{ width: "300px", borderRadius: "10px" }}
            controls
            // disable full screen
            controlsList="nodownload nofullscreen"
          >
            <source src="/joke.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      )}
    </InputContainer>
  );
};

export default Joke;
