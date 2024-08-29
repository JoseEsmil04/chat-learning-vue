import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

interface SaveMessage {
  message: string;
  isMine: boolean;
  image?: string;
}

export const useChat = () => {
  // Composable!
  const messages = ref<ChatMessage[]>([]);

  const saveMessage = (options: SaveMessage): void => {
    const { isMine, message, image } = options;

    messages.value.push({
      id: new Date().getTime(),
      message,
      isMine,
      image: image ?? undefined
    });
  };

  const getOtherResponse = async (): Promise<YesNoResponse> => {
    const resp = await fetch('https://yesno.wtf/api');

    const data = (await resp.json()) as YesNoResponse;
    return data;
  };

  const showMessage = async (message: string): Promise<void> => {
    if (message.length === 0) return;

    saveMessage({ message, isMine: true });

    // Si termina con (?)
    if (!message.endsWith('?')) return;

    await sleep(1.5); // delay 1.5 seconds
    const { answer, image } = await getOtherResponse();
    saveMessage({ message: answer, isMine: false, image });
  };

  return {
    messages,
    showMessage
  };
};
