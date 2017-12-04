'use strict';
const dataSourceUrl = 'https://neto-api.herokuapp.com/etsy';

function Listing(props) {
  
  const itemsList = props.items.map(item => {
    let currentPriceFormated;
    let quantityLevel;

    if (item.currency_code === 'USD') {
      currentPriceFormated = `$${item.price}`;
    } else if (item.currency_code === 'EUR') {
      currentPriceFormated = `€${item.price}`;
    } else {
      currentPriceFormated = `${item.price} ${item.currency_code}`;
    }

    if (item.quantity < 10) {
      quantityLevel = 'level-low';
    } else if (item.quantity <= 20) {
      quantityLevel = 'level-medium';
    } else {
      quantityLevel = 'level-high';
    }

    return (
      <div className="item" key={item.listing_id}>
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{turncateString(item.title, 50)}</p>
          <p className="item-price">{currentPriceFormated}</p>
          <p className={`item-quantity ${quantityLevel}`}>{`${item.quantity} left`}</p>
        </div>
      </div>
    );
  });


  return (
    <div className="item-list">
      {itemsList}
    </div>
  );
}

function turncateString(string, maxLength) {
  if (string.length > maxLength) {
    return string.slice(0, maxLength) + '...';
  }

  return string;
}

fetch(dataSourceUrl)
  .then(response => {
    if (response.status < 200 || response > 299) {
      throw new Error(`Invalid response status: ${response.status}`);
    }

    return response.json();
  })
  .then(data => {
    ReactDOM.render(
      <Listing items={data} />,
      document.getElementById('root')
    );
  })
  .catch(console.error);
