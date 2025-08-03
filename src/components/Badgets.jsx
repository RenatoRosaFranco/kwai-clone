import { useRef } from 'react';
import '../styles/Badgets.scss';

const Badgets = () => {
  const scrollerRef = useRef(null);

  const scrollNext = () => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth / 2, behavior: 'smooth' });
  };

  return (
    <div className="badgets-wrap">
      <div className="badgets-container" ref={scrollerRef} role="list">
        <span className="badget free-shipping-badget" role="listitem">Frete Grátis Sem valor mínimo</span>
        <span className="badget free-shipping-badget" role="listitem">Frete Grátis Compras acima de R$50</span>
        <span className="badget discount-badget" role="listitem">5% OFF Desconto máx</span>
        <span className="badget discount-badget" role="listitem">Cupom PRIMEIRA</span>
      </div>

      <button className="badgets-arrow" aria-label="Mais benefícios" onClick={scrollNext}>
        ‹
      </button>
    </div>
  );
};

export default Badgets;
