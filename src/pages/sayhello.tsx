import { useEffect, useState } from "react";

export default function SayHello() {
  const [data, setData] = useState({ name: "" });

  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((profile) => setData(profile));
  }, []);
  return <div>hello {data.name}</div>;
}
