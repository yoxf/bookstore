import { GetBooksItemModel } from "./getBooksItem.model";
import { ApiModelProperty } from "@nestjs/swagger";
import { GetSelectCategoryModel } from "../category/getSelectCategory.model";

export class GetBooksModel{
    @ApiModelProperty()
    books: GetBooksItemModel[]
    @ApiModelProperty()
    categories: GetSelectCategoryModel[]
}