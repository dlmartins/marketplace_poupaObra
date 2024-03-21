import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModuleEcomerceCartItems from './ModuleEcomerceCartItems';
import { getByTextIgnoreWrapper } from '../../../utilities/tests-helpers';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// import { handleIncreaseItemQty, handleDecreaseItemQty, handleRemoveItem } from '../../../hooks/useEcomerce';

// Cria uma mock store com um estado inicial
const mockStore = configureStore([]);
const initialState = {
  ecomerce: {
    cartItems: []
  }
};
const store = mockStore(initialState);

describe('ModuleEcomerceCartItems', () => {
  it('should display no product message when cartItems is empty', () => {
    const { container } = render(
    <Provider store={store}>
        <ModuleEcomerceCartItems />
      </Provider>
    );

    const element1 = getByTextIgnoreWrapper(container, 'Nenhum produto adicionado ao carrinho.');
    expect(element1.textContent).toBe('Nenhum produto adicionado ao carrinho.');
  });

  it('should render cart items correctly', () => {
    const cartItems = [
      { id: 1, title: 'Product 1', price: 10, quantity: 2 },
      { id: 2, title: 'Product 2', price: 15, quantity: 1 }
    ];
    const { container, getAllByTestId } = render(
        <Provider store={store}>
        <ModuleEcomerceCartItems ecomerce={{}} cartItems={cartItems}/>
      </Provider>);

    // Check if product titles are rendered
    const element1 = getByTextIgnoreWrapper(container, 'Product 1');
    expect(element1.textContent).toBe('Product 1');
    const element2 = getByTextIgnoreWrapper(container, 'Product 2');
    expect(element2.textContent).toBe('Product 2');
    
    // Check if product prices are rendered
    const element3 = getByTextIgnoreWrapper(container, 'R$10');
    expect(element3.textContent).toBe('R$10');
    const element4 = getByTextIgnoreWrapper(container, 'R$15');
    expect(element4.textContent).toBe('R$15');

    // Check if product totals are rendered
    const element5 = getByTextIgnoreWrapper(container, 'R$20.00');
    expect(element5.textContent).toBe('R$20.00');
    const element6 = getByTextIgnoreWrapper(container, 'R$15.00');
    expect(element6.textContent).toBe('R$15.00');
  });

  // it('should call handleRemoveItem when remove button is clicked', () => {
  //   const cartItems = [{ id: 1, title: 'Product 1', price: 10, quantity: 2 }];
  //   const removeItemMock = jest.fn();
  //   const { getByTestId } = render(
  //     <Provider store={store}>
  //       <ModuleEcomerceCartItems ecomerce={{}} cartItems={cartItems} removeItem={removeItemMock} />
  //     </Provider>);

  //   fireEvent.click(getByTestId('remove-button'));
  //   expect(removeItemMock).toHaveBeenCalledWith(expect.any(Object), 1, []);
  // });

  // it('should call handleIncreaseItemQty when increase button is clicked', () => {
  //   const cartItems = [{ id: 1, title: 'Product 1', price: 10, quantity: 2 }];
  //   const handleIncreaseItemQty = jest.fn();
  //   const { container } = render(
  //     <Provider store={store}>
  //     <ModuleEcomerceCartItems ecomerce={{}} cartItems={cartItems}/>
  //   </Provider>);
    
  //   const increaseButton = container.querySelector('.up');
  //   fireEvent.click(increaseButton);
  //   expect(handleIncreaseItemQty).toHaveBeenCalledWith(expect.any(Object), 1);
  // });

//   it('should call handleDecreaseItemQty when decrease button is clicked', () => {
//     const cartItems = [{ id: 1, title: 'Product 1', price: 10, quantity: 2 }];
//     const decreaseQtyMock = jest.fn();
//     const { getByTestId } = render(
//       <ModuleEcomerceCartItems ecomerce={{}} cartItems={cartItems} decreaseQty={decreaseQtyMock} />
//     );

//     fireEvent.click(getByTestId('decrease-button'));
//     expect(decreaseQtyMock).toHaveBeenCalledWith(expect.any(Object), 1);
//   });
});
