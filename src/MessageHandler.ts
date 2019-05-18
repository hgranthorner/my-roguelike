export class MessageHandler {
  messages: any[] = []

  clearMessages = () => {
    this.messages = []
  }

  addMessage = (message: string) => {
    this.messages.push(message)
  }
}

export const messageHandler = new MessageHandler
