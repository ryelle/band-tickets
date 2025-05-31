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
          <p><strong>When:</strong> {format(band.date, "PPPP 'at' p")}</p>
          <p><strong>Where:</strong> {band.location}</p>
        </>
      }
      sidebar={<Sidebar />}
      form={<Form key={band.id} />}
    />
  );
}

export default BandForm;
