import { getByTextIgnoreWrapper } from './tests-helpers';

describe('getByTextIgnoreWrapper', () => {
  test('should find element with specified text', () => {
    // Crie um elemento de teste com o texto desejado
    const container = document.createElement('div');
    container.innerHTML = '<div>Test Text</div>';

    // Verifique se a função encontra o elemento com o texto correto
    const element = getByTextIgnoreWrapper(container, 'Test Text');
    expect(element.textContent).toBe('Test Text');
  });
});
