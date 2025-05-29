// Internal dependencies
import { displayPrice } from "../../utils/currency";
import InputControl from "../input-control";
import Row from "../layout/row";

function Form({ band }) {
  return (
    <form>
      <h2>Select tickets</h2>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- Needed since the list style is removed. */}
      <ul role="list">
        {band.ticketTypes.map((ticket) => (
          <li key={ticket.type}>
            <Row>
              <div>
                <h3>{ticket.name}</h3>
                <p>{ticket.description}</p>
                <p>{displayPrice(ticket.cost)}</p>
              </div>
              <InputControl
                label="Quantity"
                hideLabelFromVision
                name={ticket.type}
                type="number"
                min="0"
                max="10"
                value={ticket.quantity}
              />
            </Row>
          </li>
        ))}
      </ul>
      <div>
        <Row>
          <h2>Total</h2>
          <div>{100}</div>
        </Row>
        <Row>
          <InputControl label="First name" />
          <InputControl label="Last name" />
        </Row>
        <Row>
          <InputControl label="Address" />
        </Row>
        <h3>Payment details</h3>
        <Row>
          <InputControl label="Credit card number" />
        </Row>
        <Row>
          <InputControl label="Exp" />
          <InputControl label="CVV" />
        </Row>
        <button type="submit">Get tickets</button>
      </div>
    </form>
  );
}

export default Form;
