import { ApiModelProperty } from "@nestjs/swagger";

export class GetCategoriesItemModel{
    @ApiModelProperty()
    id: string;
    @ApiModelProperty()
    name: string;
    @ApiModelProperty()
    description: string;
    @ApiModelProperty()
    booksCount: number;
    @ApiModelProperty()
    magazinesCount: number;
}