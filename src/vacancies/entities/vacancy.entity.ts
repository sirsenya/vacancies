import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { UUID } from 'crypto';

@ObjectType()
export class Vacancy {
  @Field(() => String)
  id: string;

  @Field(() => String, { description: 'deparment name' })
  department: string;

  @Field(() => String)
  post: string;

  @Field(() => Decimal)
  salary: number;

  @Field(() => String)
  experience: string;

  @Field(() => String)
  schedule: string;

  @Field(() => String)
  responsibilities: string;

  @Field(() => String)
  requerements: string;
}
