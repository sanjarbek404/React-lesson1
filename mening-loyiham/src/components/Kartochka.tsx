// src/components/Kartochka.tsx

// Komponent JSX qaytaradi — shuning uchun qaytarish tipi JSX.Element
const Kartochka: React.FC = () => {
  // O'zgaruvchilar
  const sarlavha: string = "Mening Kartochkam";
  const sana: string = new Date().toLocaleDateString("uz-UZ");

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <h3>{sarlavha}</h3>
      <p>Bugungi sana: {sana}</p>
    </div>
  );
};

export default Kartochka;