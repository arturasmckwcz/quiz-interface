import { Optional } from 'sequelize/types';
import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Field, ObjectType } from 'type-graphql';

export interface UserAttributes {
  id: number;
  username: string;
  password: string;
}
type UserAttributesDefaultValues = 'id';

export type UserCreationAttributes = Optional<
  UserAttributes,
  UserAttributesDefaultValues
>;

@Table({
  modelName: 'User',
  tableName: 'user',
  underscored: true,
  timestamps: false,
})
export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  @AllowNull(false)
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  username: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string;
}
