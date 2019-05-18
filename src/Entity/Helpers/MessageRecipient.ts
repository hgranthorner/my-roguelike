export class MessageRecipient {
  messages: any[] = []

  receiveMessage = (message: any) => {
    this.messages.push(message)
  }

  clearMessages = () => {
    this.messages = []
  }
}
