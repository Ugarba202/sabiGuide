import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WhatsappService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async processMessage(from: string, message: string, phoneNumberId: string) {
    console.log(`Received message from ${from}: ${message}`);
    // Basic echo for now, we will integrate AI here later
    await this.sendMessage(phoneNumberId, from, `You said: ${message}`);
  }

  async sendMessage(phoneNumberId: string, to: string, message: string) {
    const token = this.configService.get<string>('WHATSAPP_ACCESS_TOKEN');
    const url = `https://graph.facebook.com/v17.0/${phoneNumberId}/messages`;

    const data = {
      messaging_product: 'whatsapp',
      to: to,
      text: { body: message },
    };

    try {
      await this.httpService.axiosRef.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Message sent successfully');
    } catch (error: any) {
      console.error('Error sending message:', error.response?.data || error.message);
    }
  }
}
