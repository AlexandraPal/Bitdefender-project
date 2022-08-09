const productTilesContainer = document.querySelector('.product-tiles-container');

productTilesContainer.addEventListener('click', (event) => {
  const label = event.target;

  if (label.classList.contains('product-upgrade-text') != true) {
    return
  }

  const premiumVpn = label.parentElement.parentElement.querySelector('#premium-vpn');
  const oldProductPrice = label.parentElement.parentElement.querySelector('#old-price');
  const oldProductPriceWithVpn = oldProductPrice.dataset.vpn;
  const oldProductPriceWithoutVpn = oldProductPrice.dataset.noVpn;
  const productGreenCheckbox = label.parentElement.querySelector('#product-upgrade-check');
  const productTotalPrice = label.parentElement.parentElement.querySelector('#product-total-price');
  const productTotalPriceWithVpn = productTotalPrice.dataset.totalVpn;
  const productTotalPriceWithoutVpn = productTotalPrice.dataset.totalNoVpn;

  if (label.dataset.active == 'true') {
    label.dataset.active = 'false';
    premiumVpn.classList.add('d-none');
    oldProductPrice.innerText = oldProductPriceWithoutVpn;
    productTotalPrice.innerText = productTotalPriceWithoutVpn;
    label.setAttribute('id', 'product-upgrade-label');
    productGreenCheckbox.classList.add('d-none');
  } else {
    label.dataset.active = 'true';
    premiumVpn.classList.remove('d-none');
    oldProductPrice.innerText = oldProductPriceWithVpn;
    productTotalPrice.innerText = productTotalPriceWithVpn;
    label.removeAttribute('id');
    productGreenCheckbox.classList.remove('d-none');
  }
})
