import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

import BandForm from "./BandForm";
import { BandProvider } from "./data/context";

function App() {
  const bands = [skaBand, kpopBand, punkBand];
  return (
    <div className="App">
      <BandProvider value={bands[0]}>
        <BandForm />
      </BandProvider>
    </div>
  );
}

export default App;
