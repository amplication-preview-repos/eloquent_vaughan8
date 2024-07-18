/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BulletinWhereUniqueInput } from "./BulletinWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BulletinUpdateInput } from "./BulletinUpdateInput";

@ArgsType()
class UpdateBulletinArgs {
  @ApiProperty({
    required: true,
    type: () => BulletinWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BulletinWhereUniqueInput)
  @Field(() => BulletinWhereUniqueInput, { nullable: false })
  where!: BulletinWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BulletinUpdateInput,
  })
  @ValidateNested()
  @Type(() => BulletinUpdateInput)
  @Field(() => BulletinUpdateInput, { nullable: false })
  data!: BulletinUpdateInput;
}

export { UpdateBulletinArgs as UpdateBulletinArgs };
