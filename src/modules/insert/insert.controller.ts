import { Controller, Post } from '@nestjs/common';
import { InsertService } from './insert.service';

@Controller('insert')
export class InsertController {
  constructor(private readonly insertService: InsertService) {}

  @Post()
  async insertData(): Promise<string> {
    try {
      const result = await this.insertService.insertData();
      return result;
    } catch (error) {
      console.error('Error inserting data:', error);
      throw new Error('Data insertion failed');
    }
  }
}
