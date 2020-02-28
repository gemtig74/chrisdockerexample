import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>
        This site has 3 pages, all of which are rendered dynamically in the browser (not server rendered) consiting of `Home`, `About`, and `Dashboard`.
      </p>
      <p>
        As you click around on the different `Link's`, the router renders the matching `Route`.
      </p>
      <Link className="btn btn-primary" to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
