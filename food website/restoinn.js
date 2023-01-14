function addToCart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('image');
    selectedItem.setAttribute('id', addItemId);
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var cartItems = document.getElementsById('image');
    selectedItem.append(img);
    cartItems.apppend(selectedItem);
}