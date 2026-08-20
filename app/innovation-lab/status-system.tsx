"use client";

import { useState } from "react";

export function StatusSystem({ statuses }: { statuses: string[][] }) {
  const [active, setActive] = useState(0);

  return (
    <ul className="labStatusList">
      {statuses.map(([status, body], index) => {
        const isActive = index === active;

        return (
          <li key={status} className={isActive ? "isActive" : undefined}>
            <button type="button" onClick={() => setActive(index)} aria-expanded={isActive}>
              <span className="labStatusNumber">{String(index + 1).padStart(2, "0")}</span>
              <span className="labStatusArrow" aria-hidden="true">
                →
              </span>
              <span className="labStatusName">{status}</span>
            </button>
            {isActive ? <p>{body}</p> : null}
          </li>
        );
      })}
    </ul>
  );
}
