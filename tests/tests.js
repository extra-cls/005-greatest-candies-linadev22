import { greatesCandies } from "../index.js";
import assert from "assert";

assert.equal(
    JSON.stringify(
        greatesCandies([], 1)
    ),
    JSON.stringify(
        []
    ),
    "Not correct!"

)

assert.equal(
    JSON.stringify(
        greatesCandies([2,3,5,1,3], 3)
    ),
    JSON.stringify(
        [true,true,true,false,true]
    ),
    "Not correct!"
)