// External dependencies
import { format } from "date-fns";

// Internal dependencies
import Form from "./components/form";
import Layout from "./components/layout";
import Sidebar from "./components/sidebar";
import { useBand } from "./data/context";

function BandForm() {
  const band = useBand();

  return (
    <Layout
      header={
        <>
          <h1>{band.name}</h1>
          <p>{format(band.date, "PPPP 'at' p")}</p>
          <p>{band.location}</p>
        </>
      }
      sidebar={<Sidebar />}
      form={<Form />}
    />
  );
}

export default BandForm;
