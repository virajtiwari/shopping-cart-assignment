export const addRemoveCart = (cart, requestPayload, type) => {
    if (!cart?.items?.some((el) => el.id === requestPayload?.id)) {
        requestPayload['quantity'] = 1;
        cart.items.push(requestPayload);
        if(type==='add')
          cart.totalCount += 1;
        else if(type==='remove' && cart?.items?.length >= 0) cart.totalCount -= 1;
      } else {
        const cartItem = cart.items.find(k=>k.id === requestPayload?.id)
        if(type==='add') {
          cartItem.quantity += 1;
          cart.totalCount += 1;
        } else if(type==='remove' && cart?.items?.length >= 0) {
          cartItem.quantity -= 1;
          cart.totalCount -= 1;
        }          
      };
      console.log(cart)
      cart['items'] = [...cart?.items?.filter(k=>k?.quantity > 0)];
      cart['totalPrice'] = cart?.items?.reduce((acc, item)=>acc + (item?.price * item?.quantity),0);

      return cart;
}