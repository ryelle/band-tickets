import { format } from "date-fns";
import Layout from "./components/layout";
import { displayPrice } from "./utils/currency";

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
          <p>{band.description_blurb}</p>
        </>
      }
      form={
        <>
          <h2>Select tickets</h2>
          <ul>
            {band.ticketTypes.map((ticket) => (
              <li key={ticket.type}>
                <h3>{ticket.name}</h3>
                <p>{ticket.description}</p>
                <p>{displayPrice(ticket.cost)}</p>
              </li>
            ))}
          </ul>
        </>
      }
    />
  );
}

export default BandForm;
