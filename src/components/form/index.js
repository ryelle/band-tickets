// External dependencies
import { useState } from "react";

// Internal dependencies
import { displayPrice } from "../../utils/currency";
import InputControl from "../input-control";
import Row from "../layout/row";
import { useBand } from "../../data/context";

function Form() {
  const band = useBand();
  const [tickets, setTickets] = useState(
    band.ticketTypes.map((ticket) => ({ ...ticket, quantity: 0 }))
  );
  const totalCost = tickets.reduce((acc, ticket) => {
    if (ticket.quantity > 0) {
      acc += ticket.quantity * ticket.cost;
    }
    return acc;
  }, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form data");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Select tickets</h2>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- Needed since the list style is removed. */}
      <ul role="list">
        {tickets.map((ticket) => (
          <li key={ticket.type}>
            <Row>
              <div>
                <h3>{ticket.name}</h3>
                <p>{ticket.description}</p>
                <p>{displayPrice(ticket.cost)}</p>
              </div>
              <InputControl
                label={`${ticket.name} quantity`}
                hideLabelFromVision
                name={ticket.type}
                type="number"
                min="0"
                max="10"
                value={ticket.quantity}
                onChange={(value) => {
                  // @todo Could move this validation into InputControl, using min/max to clamp the value.
                  value = Number(value);
                  if (value < 0) {
                    value = 0;
                  }
                  const updatedTickets = tickets.map((_ticket) => {
                    if (_ticket.type === ticket.type) {
                      return { ..._ticket, quantity: value };
                    }
                    return _ticket;
                  });
                  setTickets(updatedTickets);
                }}
              />
            </Row>
          </li>
        ))}
      </ul>
      <div>
        <Row>
          <h2>Total</h2>
          <div style={{ textAlign: "right" }}>{displayPrice(totalCost)}</div>
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
