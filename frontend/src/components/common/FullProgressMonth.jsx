import Popup from "./Popup";
import Progress from "./Progress";
const FullProgressMonth = () => {
  return (
    <div className="flex justify-center min-w-11/12">
      <div className="bg-white shadow-md rounded-md flex flex-col justify-center items-center w-full">
        <div className="flex items-center justify-around gap-2 p-5">
          <div>
            <Popup
              buttonText={"Starting Business"}
              popupText={
                "Launching and establishing the company (including business planning, legal document preparation, and team building)."
              }
            />
          </div>
          <div>
            <Popup
              buttonText={"Website and Product Development"}
              popupText={
                "Developing the company's website, improving, and launching products, and testing them."
              }
            />
          </div>
          <div>
            <Popup
              buttonText={"Start Sales"}
              popupText={
                "Initiating sales operations and attracting customers. Developing marketing strategies, starting promotional campaigns, and running sales operations."
              }
            />
          </div>
          <div>
            <Popup
              buttonText={"Stabilizing Operation and Sales"}
              popupText={
                "Analyzing sales performance, improving internal operations, expanding the customer base, and updating strategies based on previous experiences."
              }
            />
          </div>
        </div>
        <div>
          <Progress />
        </div>
      </div>
    </div>
  );
};

export default FullProgressMonth;
