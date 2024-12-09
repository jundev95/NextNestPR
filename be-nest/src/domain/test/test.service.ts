import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { test } from 'src/db/schema/test.schema';
import { db } from 'src/db';
import { eq } from 'drizzle-orm';

@Injectable()
export class TestService {
  async create(createTestDto: CreateTestDto) {
    const result = await db.insert(test).values({
      content: createTestDto.content,
    });
    return { message: 'Test created successfully', result };
  }

  async findAll() {
    const result = await db.select().from(test);
    return { message: 'All tests retrieved', data: result };
  }

  async findOne(id: number) {
    const result = await db.select().from(test).where(eq(test.id, id));
    return result.length ? result[0] : { message: 'Test not found' };
  }

  async update(id: number, updateTestDto: UpdateTestDto) {
    const result = await db
      .update(test)
      .set({ content: updateTestDto.content })
      .where(eq(test.id, id));
    return { message: 'Test updated successfully', result };
  }

  async remove(id: number) {
    await db.delete(test).where(eq(test.id, id));
    return { message: 'Test removed successfully' };
  }
}
