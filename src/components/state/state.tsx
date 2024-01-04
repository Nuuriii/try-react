//kita ibaaratkan state sebagai variabel
//cara makai state
//import terlebih dahulu
import { useState } from "react";

export function State() {
  // mendefinisikan nilai state
  const [value, setValue] = useState("nurr");
  //value (buat nyimpan)
  //setValue(mengatur nilai)

  //   let set = setValue(1);
  const addValue = () => {
    setValue("reza");
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={addValue}>ganti nama</button>
    </div>
  );
}
