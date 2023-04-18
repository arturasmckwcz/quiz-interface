import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class PatientInfo {
  @Field(() => String, { nullable: true })
  dob?: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => [String], { nullable: true })
  allergies?: string[];

  @Field(() => [String], { nullable: true })
  medications?: string[];
}
