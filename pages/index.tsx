import { FC } from "react";
import ChoseSection from "../components/Chose/chose";
import ChoseArt from "../components/Chose/ChoseArt";

const Main: FC = () => {
  return (
    <div>
      <ChoseSection FirstArt={ChoseArt} />
    </div>
  );
};
export default Main;
