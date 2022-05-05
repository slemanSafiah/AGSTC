import React from "react";

export default function SecurityProgramService({ title, content, mar }) {
  return (
    <div style={{ marginLeft: `${mar}em` }} className="sp-service">
      <div className="sp-service-title">{title}</div>
      <div className="sp-service-content">{content}</div>
    </div>
  );
}
