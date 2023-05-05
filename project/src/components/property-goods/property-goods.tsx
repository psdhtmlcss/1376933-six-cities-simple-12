type PropertyGoodsScreenProps = {
  goods: string[];
}

export default function PropertyGoods({goods}: PropertyGoodsScreenProps): JSX.Element {
  return (
    <ul className="property__inside-list">
      {
        goods.map((item, index) => (
          <li className="property__inside-item" key={index}>{item}</li>
        ))
      }
    </ul>
  );
}