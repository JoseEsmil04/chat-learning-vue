import BoxMessages from '@/components/chat/BoxMessages.vue';
import { mount } from '@vue/test-utils';

describe('<BoxMessages/>', () => {
  const wrapper = mount(BoxMessages);

  test('Should Match Snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type=text]').exists()).toBeTruthy();
    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('button svg').exists()).toBeTruthy();
  });

  test('emits the sendMessage event when the button is clicked with message value', async () => {
    const message = 'Hola Esmil!';

    await wrapper.find('input[type=text]').setValue(message); // Ponle el valor de la variable message
    await wrapper.find('button').trigger('click'); // Dale click al boton (trigger = evento)
    //await wrapper.find('input[type=text]').trigger('keydown.enter'); // Dale Boton enter

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    //console.log(wrapper.vm as any);
    //expect((wrapper.vm as any).messsage).toBe('');
  });

  test('emits the sendMessage event when the keypress.enter is triggered with message value', async () => {
    const message = 'Hola Esmil!';

    const input = wrapper.find('input[type=text]');

    await input.setValue(message); // Ponle el valor de la variable message
    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });
});
