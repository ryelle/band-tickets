// External dependencies
import DOMPurify from "dompurify";
import { format } from "date-fns";

// Internal dependencies
import Form from "./components/form";
import Layout from "./components/layout";

function BandForm({ band }) {
  return (
    <Layout
      header={
        <>
          <h1>{band.name}</h1>
          <p>{format(band.date, "PPPP 'at' p")}</p>
          <p>{band.location}</p>
        </>
      }
      sidebar={
        <>
          <figure>
            <img src={band.imgUrl} alt="" />
          </figure>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(band.description_blurb),
            }}
          />
        </>
      }
      form={<Form band={band} />}
    />
  );
}

export default BandForm;
