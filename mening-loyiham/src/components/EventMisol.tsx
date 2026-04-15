// src/components/EventMisol.tsx

import { useState } from "react";

const EventMisol: React.FC = () => {
  const [matn, setMatn] = useState<string>("");
  const [xabar, setXabar] = useState<string>("");

  // ==========================================
  // onClick — tugma bosilganda
  // React.MouseEvent<HTMLButtonElement> — button uchun event tipi
  // ==========================================
  const tugmaBosildi = (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log("Tugma bosildi!", event.currentTarget.textContent);
    setXabar("Tugma bosildi! ✅");
  };

  // ==========================================
  // onChange — input o'zgarganda
  // React.ChangeEvent<HTMLInputElement> — input uchun event tipi
  // ==========================================
  const inputOzgardi = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // event.target.value — inputga yozilgan matn
    setMatn(event.target.value);
  };

  // ==========================================
  // Textarea uchun alohida tip
  // ==========================================
  const textareaOzgardi = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    console.log("Textarea:", event.target.value);
  };

  // ==========================================
  // Select uchun alohida tip
  // ==========================================
  const selectOzgardi = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    console.log("Tanlandi:", event.target.value);
  };

  return (
    <div>
      {/* INPUT */}
      <input
        type="text"
        placeholder="Biror narsa yozing..."
        value={matn}               // Input qiymati
        onChange={inputOzgardi}    // O'zgarganda
      />
      <p>Yozilgan: {matn}</p>

      {/* TEXTAREA */}
      <textarea onChange={textareaOzgardi} placeholder="Ko'p qatorli matn..." />

      {/* SELECT */}
      <select onChange={selectOzgardi}>
        <option value="uzb">O'zbek</option>
        <option value="rus">Rus</option>
        <option value="eng">Ingliz</option>
      </select>

      {/* BUTTON */}
      <button onClick={tugmaBosildi}>Bosing!</button>
      
      {/* Xabarni ko'rsatish */}
      {xabar && <p style={{ color: "green" }}>{xabar}</p>}
    </div>
  );
};

export default EventMisol;