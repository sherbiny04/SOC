import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

type CountablePayload =
  | unknown[]
  | {
      count?: number;
      total?: number;
      data?: unknown[];
      items?: unknown[];
    };

@Injectable()
export class DashboardService {
  constructor(private readonly httpService: HttpService) {}

  async getStats() {
    const [sessions, templates, participants, resources] = await Promise.all([
      this.fetchCount('http://localhost:3001/sessions'),
      this.fetchCount('http://localhost:3002/templates'),
      this.fetchCount('http://localhost:3003/participants'),
      this.fetchCount('http://localhost:3004/'),
    ]);

    return {
      sessions,
      templates,
      participants,
      resources,
    };
  }

  private async fetchCount(url: string): Promise<number> {
    const response = await firstValueFrom(this.httpService.get<CountablePayload>(url));

    return this.countDocuments(response.data);
  }

  private countDocuments(payload: CountablePayload): number {
    if (Array.isArray(payload)) {
      return payload.length;
    }

    if (typeof payload?.count === 'number') {
      return payload.count;
    }

    if (typeof payload?.total === 'number') {
      return payload.total;
    }

    if (Array.isArray(payload?.data)) {
      return payload.data.length;
    }

    if (Array.isArray(payload?.items)) {
      return payload.items.length;
    }

    return 0;
  }
}
