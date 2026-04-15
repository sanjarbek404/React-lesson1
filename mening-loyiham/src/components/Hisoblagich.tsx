// src/components/Hisoblagich.tsx

// useState React dan import qilinadi
import { useState } from "react";

const Hisoblagich: React.FC = () => {
  // useState<number>(0) — son tipidagi holat, boshlang'ich qiymati 0
  //          ^^^^^^^
  //          Bu tip ko'rsatilmasa ham bo'ladi — TypeScript o'zi topadi
  const [son, setSon] = useState<number>(0);
  //     ^^^  ^^^^^
  //     qiymat  qiymatni o'zgartiruvchi funksiya

  return (
    <div>
      <h2>Son: {son}</h2>
      
      {/* Son ni 1 ga oshirish */}
      <button onClick={() => setSon(son + 1)}>+1</button>
      
      {/* Son ni 1 ga kamaytirish */}
      <button onClick={() => setSon(son - 1)}>-1</button>
      
      {/* Nolga qaytarish */}
      <button onClick={() => setSon(0)}>Nol</button>
    </div>
  );
};

export default Hisoblagich;