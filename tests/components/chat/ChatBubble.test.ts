import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';

describe('<ChatBubble/>', () => {
  test('Renders own message correctly', () => {
    const message = 'Hola Mundo';

    // Montar el Componente
    const wrapper = mount(ChatBubble, {
      props: {
        message: message,
        isMine: true
      }
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-200').exists()).toBe(false);
  });

  test('Renders received message correctly', () => {
    const message = 'No';
    const image = 'https://example.jpg';

    // Montar el Componente
    const wrapper = mount(ChatBubble, {
      props: { message, isMine: false, image }
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);

    expect(wrapper.find('.object-contain').exists()).toBeTruthy(); // Imagen
    expect(wrapper.find('.object-contain').attributes('src')).toBe(image);
  });
});
