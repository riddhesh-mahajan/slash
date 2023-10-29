import React from "react";

function Card({
  title,
  value,
}: {
  title: string;
  value?: string | number;
}): React.ReactNode {
  return (
    <div className="p-5 rounded-md bg-slate-800">
      <p className="mb-3 text-md">{title}</p>
      <p className="text-5xl font-bold">{value}</p>
    </div>
  );
}

export default Card;
