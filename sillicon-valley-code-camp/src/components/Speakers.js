import SpeakersList from "./SpeakersList";
import Toolbar from "./Toolbar";
import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext";

function Speakers() {
  return (
    <SpeakerFilterProvider>
      <Toolbar />
      <SpeakersList />
    </SpeakerFilterProvider>
  );
}
export default Speakers;
