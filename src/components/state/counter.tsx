//manggil use state agar bisa dipakai
import { useState } from "react";

//kalau mau pakai use state harus buaat component dulu
export function Counter() {
  //definisiin nilai useStatenya
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const minCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={addCount}>Tambah Nilai</button>
      <button onClick={minCount}>Kurangin Nilai</button>
    </div>
  );
}
