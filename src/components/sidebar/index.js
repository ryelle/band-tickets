// External dependencies
import DOMPurify from "dompurify";

// Internal dependencies
import { useBand } from "../../data/context";

function Sidebar() {
  const band = useBand();

  return (
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
  );
}

export default Sidebar;
