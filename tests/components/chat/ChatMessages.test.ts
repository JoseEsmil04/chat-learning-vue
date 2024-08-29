import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { mount } from '@vue/test-utils';

const messages: ChatMessage[] = [
  { id: 1, message: 'Hola Esmil', isMine: true },
  { id: 2, message: 'Nooo manito', isMine: false, image: 'https://esmil.jpg' }
];

describe('<ChatMessages/>', () => {
  const wrapper = mount(ChatMessages, {
    props: {
      messages
    }
  });

  test('Render chat messages correctly!', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });

    expect(chatBubbles.length).toBe(messages.length);
  });

  test('Scrolls down to the bottom after messages update', async () => {
    const scrollToMock = vi.fn();

    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
    chatRef.scrollTo = scrollToMock;

    await wrapper.setProps({
      messages: [...messages, ...messages, { id: 4, message: 'Nope', isMine: false }]
    });

    await new Promise((r) => setTimeout(r, 150));

    expect(scrollToMock).toHaveBeenCalledTimes(1);
    expect(scrollToMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: expect.any(Number)
    });
  });
});
