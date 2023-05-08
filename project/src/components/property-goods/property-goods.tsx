type PropertyGoodsScreenProps = {
  goods: string[];
}

export default function PropertyGoods({goods}: PropertyGoodsScreenProps): JSX.Element {
  return (
    <ul className="property__inside-list">
      {
        goods.map((item) => (
          <li className="property__inside-item" key={item}>{item}</li>
        ))
      }
    </ul>
  );
}
