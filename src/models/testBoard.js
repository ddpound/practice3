import mongoose, { Schema } from "mongoose";

const testBoardSchema = new Schema(
    {
        title : String,
        content : String,
    },
    {
        timestamps : true,
    }
)

const testBoard = mongoose.models.testBoard || mongoose.model('testBoard',testBoardSchema);

export default testBoard;