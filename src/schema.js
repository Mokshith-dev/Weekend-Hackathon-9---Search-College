const { Schema, mongo } = require('mongoose');

const collegeSchema = new Schema({
    name: Schema.Types.String,
    state: Schema.Types.String,
    minPackage: Schema.Types.Number,
    maxFees: Schema.Types.Number,
    city: Schema.Types.String,
    exam: Schema.Types.Array,
    course: Schema.Types.String
})

// const collegeSchema = new Schema({
//     name: {
//         type: String,
//         default: {"$regex": /.*/}
//     },
//     state: {
//         type: String,
//         default: {"$regex": /.*/}
//     },
//     minPackage: {
//         type: Number,
//         default: 0
//     },
//     maxFees: {
//         type: Number,
//         default: 100
//     },
//     city: {
//         type: String,
//         default: {"$regex": /.*/}
//     },
//     exam: {
//         type: Array,
//         default: {"$regex": /.*/}
//     },
//     course: {
//         type: String,
//         default: {"$regex": /.*/}
//     },
    
// })
exports.collegeSchema = collegeSchema;
