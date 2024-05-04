import Seckford from "../public/seckford-hall.jpg";
import Image from "next/image";

const SeckfordHall = () => {
  return (
    <div style={{ maxWidth: "680px", marginTop: "2rem" }}>
      <h1>Seckford Hall</h1>
      <p>Great Bealings, Woodbridge IP13 6NU</p>
      <Image
        style={{ width: "100%", height: "auto", borderRadius: "12px" }}
        src={Seckford}
        alt="Seckford Hall"
      />
    </div>
  );
};

export default SeckfordHall;
