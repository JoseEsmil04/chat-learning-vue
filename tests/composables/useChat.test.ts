import { useChat } from '@/composables/useChat';

describe('useChat.ts', () => {
  test('add message correctly when onMessage is called!', async () => {
    const texts = ['Hola Esmil', 'Jajaj que bueno'];
    const { messages, showMessage } = useChat();

    await Promise.all([showMessage(texts[0]), showMessage(texts[1])]);

    expect(messages.value.length).toBe(2);
    expect(messages.value[0].isMine).toBeTruthy();
    expect(messages.value[1].message).toBe(texts[1]);
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      message: texts[0],
      isMine: true
    });
  });

  test('adds nothing if message is empty!', async () => {
    const text = '';
    const { messages, showMessage } = useChat();

    await showMessage(text);

    expect(messages.value.length).toBe(0);
  });

  test('get her response correctly when message ends with "?"', async () => {
    const message = 'Quieres ir a tomar algo?';

    const { messages, showMessage } = useChat();

    await showMessage(message);

    const [, herMessage] = messages.value;

    expect(messages.value.length).toBe(2);
    expect(herMessage.isMine).toBeFalsy();
    expect(herMessage).toEqual({
      id: expect.any(Number),
      message: expect.any(String),
      isMine: false,
      image: expect.any(String)
    });
  });

  test('mock - fetch', async () => {
    const mockResponse = {
      answer: 'yes',
      image: 'http://yesno.com'
    };

    (window as any).fetch = vi.fn(async () => ({
      json: async () => mockResponse
    }));

    const message = 'Quieres ir a tomar algo?';

    const { messages, showMessage } = useChat();

    await showMessage(message);

    const [, herMessage] = messages.value;

    expect(herMessage).toEqual({
      id: expect.any(Number),
      message: mockResponse.answer,
      isMine: false,
      image: mockResponse.image
    });
  });
});
