import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import '../styles/BottomBar.scss';

const BottomBar = () => {
  // Link (Comprar)
  const handleBuy = (link) => {
    window.open(link, '_blank');
  }

  // Link (Contatar)
  const handleContact = (link) => {
    window.open(link, '_blank');
  }

  // Link (Loja)
  const handleStore = (link) => {
    window.open(link, '_blank');
  }

  // CTA Texts
  const ctaTexts = [
    { gradientColor: "linear-gradient(to bottom, #e4f6e8, white)", textColor: '#049300', text: 'O Mais Barato' },
    { gradientColor: "linear-gradient(to bottom, #e4f6e8, white)", textColor: '#049300', text: 'O Mais Barato' },
    { gradientColor: "linear-gradient(to bottom, #fef3ed, white)", textColor: '#4e4a47', text: 'O Mais Barato' },
    { gradientColor: "linear-gradient(to bottom, #fef3ed, white)", textColor: '#4e4a47', text: 'O Mais Barato' },
  ]

  const CtaSection = ({ cta }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % ctaTexts.length);
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    const { gradientColor, textColor, text } = ctaTexts[index];

    return (
      <div className="bottom-bar-cta" style={{ background: gradientColor }}>
        <p
          className="text-center cta-text-slide"
          style={{ color: textColor }}
          key={index}
        >
          {text}
        </p>
      </div>
    )
  }

  return (
    <>
      {ctaTexts.map((cta, index) => (
        <CtaSection key={index} cta={cta} />
      ))}

      <div className="bottom-bar">
        <div className="bottom-bar-left">
          <div className="text-center">
            <button onClick={() => handleStore('https://www.google.com')}
              className="bottom-bar-store">
              <img
                  src="/icons/store.png"
                  alt="Store icon"
                  width={30}
                  height={30}
                  className="store-icon"
                />
              <div className='button-label'>Loja</div>
            </button>
          </div>
          <div className="text-center">
            <button onClick={() => handleContact('https://wa.me/5511999999999')}
              className="bottom-bar-contact text-center">
              <img
                  src="/icons/chat.png"
                  alt="Store icon"
                  width={30}
                  height={30}
                  className="store-icon"
                />
              <div className='button-label'>Contatar</div>
            </button>
          </div>
        </div>

        <div className="bottom-bar-right">
          <div className="bottom-bar-cart">
            <img
              src="/icons/cart.png"
              alt="Store icon"
              width={28}
              height={28}
              className="store-icon"
            />
          </div>
          <Button className="bottom-bar-button"
            onClick={() => handleBuy('https://www.google.com')}
          > Compre com cupons
          </Button>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
