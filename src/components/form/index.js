// External dependencies
import { useState } from "react";

// Internal dependencies
import Button from "../button";
import { displayPrice } from "../../utils/currency";
import InputControl from "../input-control";
import Row from "../layout/row";
import { useBand } from "../../data/context";

function Form() {
  const band = useBand();
  const [tickets, setTickets] = useState(
    band.ticketTypes.map((ticket) => ({ ...ticket, quantity: 0 }))
  );
  const [payment, setPayment] = useState({
    firstName: "",
    lastName: "",
    address: "",
    card: "",
    exp: "",
    cvv: "",
  });
  const totalCost = tickets.reduce((acc, ticket) => {
    if (ticket.quantity > 0) {
      acc += ticket.quantity * ticket.cost;
    }
    return acc;
  }, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Rough idea of what data might be needed for processing.
    const data = {
      band: band.id,
      payment: payment,
      cost: totalCost,
    };
    data.tickets = tickets
      .map((t) => (t.quantity > 0 ? [t.type, t.quantity] : false))
      .filter(Boolean);

    // In a real app, this would be an API request or some other function call.
    console.log("Purchase", data);
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
      <Row>
        <strong>Total</strong>
        <div style={{ textAlign: "right" }}>{displayPrice(totalCost)}</div>
      </Row>
      <hr />
      <div>
        <h2>Checkout</h2>
        <Row>
          <InputControl
            label="First name"
            value={payment.firstName}
            onChange={(value) => setPayment({ ...payment, firstName: value })}
          />
          <InputControl
            label="Last name"
            value={payment.lastName}
            onChange={(value) => setPayment({ ...payment, lastName: value })}
          />
        </Row>
        <Row>
          <InputControl
            label="Address"
            value={payment.address}
            onChange={(value) => setPayment({ ...payment, address: value })}
          />
        </Row>
        <h3>Payment details</h3>
        <Row>
          <InputControl
            label="Credit card number"
            value={payment.card}
            onChange={(value) => {
              // Ideally this would be a real validation.
              if (/^[\d ]{0,19}$/.test(value)) {
                setPayment({ ...payment, card: value });
              }
            }}
          />
        </Row>
        <Row>
          <InputControl
            label="Exp"
            placeholder="MM/YY"
            value={payment.exp}
            onBlur={(event) => {
              // Format
              let value = event.target.value.replace("/", "");
              if (value.length === 3 || value.length === 5) {
                value = "0" + value.slice(0, 1) + "/" + value.slice(1);
              } else if (value.length === 4 || value.length === 6) {
                value = value.slice(0, 2) + "/" + value.slice(2);
              }
              setPayment({ ...payment, exp: value });
            }}
            onChange={(value) => {
              if (/^\d{0,2}\/?\d{0,4}$/.test(value)) {
                setPayment({ ...payment, exp: value });
              }
            }}
          />
          <InputControl
            label="CVV"
            placeholder="000"
            value={payment.cvv}
            onChange={(value) => {
              if (/^\d{0,4}$/.test(value)) {
                setPayment({ ...payment, cvv: value });
              }
            }}
          />
        </Row>
        <Row style={{ marginBlockStart: "calc(2 * var(--spacing--30))" }}>
          <Button>Submit</Button>
        </Row>
      </div>
    </form>
  );
}

export default Form;
