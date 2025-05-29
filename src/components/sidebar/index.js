// External dependencies
import DOMPurify from "dompurify";

// Internal dependencies
import { useBand } from "../../data/context";

function Sidebar() {
  const band = useBand();

  return (
    <div>
      <figure>
        <img src={band.imgUrl} alt="" />
      </figure>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(band.description_blurb),
        }}
      />
    </div>
  );
}

export default Sidebar;
