# Band Tickets

This page displays band & event info with a ticket and payment form.

https://ryelle.github.io/band-tickets/

## Accessibility

The page mostly meets WCAG AA standards, except for one thing: the band-provided images don’t have alt text. To fix this, I suggest updating the JSON data format so that each image entry uses an `img` object with `url` and `alt` fields. Optionally, `img` could support an array if we want to support galleries.

Form fields are labeled correctly for screen reader users. The labels are also visible so sighted users can easily see which input is for what, and to make sure the accessible name matches the visual label—which also helps users who rely on speech input. Ideally, I’d share this feedback with the designer early on so we can work together on the best way to implement it before development starts.

## Form Behavior

The form fields are disabled until you select a ticket, to prevent "buying" no tickets.

When you submit the form, it logs the band ID, ticket info, and payment details to the console. It also gives a confirmation message for screen reader users. Some fields already have basic validation, but I’d suggest using a tool like [card-validator](https://github.com/braintree/card-validator) to improve validation for credit card inputs.

Right now, there’s no visible confirmation after submitting. In a real site, it’d be good to show a success message or clearly flag any errors so users know what’s going on.

I’ve added minimum limits to the quantity input fields to prevent negative numbers, and set a cap of 10 tickets just to keep the value visible in the small space.

## Observations

- General Admission availability: Some bands don’t have GA tickets. That might be intentional, but in real-world use, it’s worth clarifying.
- Description field: Since band descriptions can include HTML, I sanitize them with [DOMPurify](https://www.npmjs.com/package/dompurify). This does have the effect of truncating the kpop description, since it's malformed HTML.
- Timezones: The current setup defaults to the user’s timezone, which works if events are local or streamed. But for in-person events, using the venue’s timezone is usually more accurate (yes, I’ve run into this before 😅).
- Currency: I assume prices are in USD. If we add international events, we’d need to support other currencies, number formats, and possibly different payment methods (not everyone uses credit cards).

## Out of Scope (but worth mentioning)

- Routing & API integration: Right now, changing bands means manually updating the band variable. Adding routing (like `/btess` or `/flaming-potatoes`) could make this smoother. A backend with an API could manage the event data as more events are added.
- Internationalization: Supporting multiple languages would need i18n tools. I’m most familiar with the tools WordPress uses (gettext style), but I’ve also used [react-intl](https://formatjs.github.io/docs/getting-started/installation/), which works well with React apps. RTL languages, font choices, and spacing for translated strings would also need attention.
- Styling options: Features like dark mode or allowing a custom band color could be fun improvements.
- Multi-step form/component refactor: To make it more user-friendly, we could separate ticket selection and payment into separate steps. The form InputControl could be wrapped into type-specific components for self-contained validation & error states. For example, the address field could use autocomplete (Google Maps or Mapbox).
