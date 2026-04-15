// src/components/MahsulotKartasi.tsx

// Ichma-ich interface yozish mumkin
interface Rasm {
  url: string;
  alt: string;
}

interface MahsulotProps {
  id: number;                              // Unikal raqam
  nomi: string;                            // Mahsulot nomi
  narxi: number;                           // Narx
  chegirma?: number;                       // Ixtiyoriy chegirma foizi
  rasm: Rasm;                              // Rasm obyekti
  kategoriyalar: string[];                 // Kategoriyalar massivi
  onClick: (id: number) => void;           // Funksiya tipi
  //        ^^^^^^^^^^^^^^^^^^^
  //        id qabul qilib, hech narsa qaytarmaydi
}

const MahsulotKartasi: React.FC<MahsulotProps> = ({
  id,
  nomi,
  narxi,
  chegirma = 0,       // Default qiymat: 0
  rasm,
  kategoriyalar,
  onClick,
}) => {
  // Chegirmali narxni hisoblash
  const yakuniyNarx: number = narxi - (narxi * chegirma) / 100;

  return (
    <div className="karta" onClick={() => onClick(id)}>
      <img src={rasm.url} alt={rasm.alt} />
      <h3>{nomi}</h3>
      
      {/* Kategoriyalarni ko'rsatish */}
      <div>
        {kategoriyalar.map((kat, index) => (
          <span key={index} className="kat-badge">
            {kat}
          </span>
        ))}
      </div>

      {/* Chegirma bormi? */}
      {chegirma > 0 ? (
        <div>
          <s>{narxi.toLocaleString()} so'm</s>  {/* Kesib tashlangan narx */}
          <strong>{yakuniyNarx.toLocaleString()} so'm</strong>
        </div>
      ) : (
        <strong>{narxi.toLocaleString()} so'm</strong>
      )}
    </div>
  );
};

export default MahsulotKartasi;