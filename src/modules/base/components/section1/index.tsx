import { Button } from "antd";
import "./Section1.scss";

const Section1 = () => {
  return (
    <div className="sec-1">
      <div className="sec-1__content">
        <h1 className="sec-1__heading">
          Healthy Cooking Recipes and the right Nutrition
        </h1>
        <h3>Browse Through Over 1000+ Mouth Watering Recipes</h3>
        <Button className="sec-1__more-btn">More Recipes</Button>
      </div>
    </div>
  );
};

export default Section1;
