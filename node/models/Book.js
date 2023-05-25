const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    expecPrice: {
      type: Number,
      required: false,
    },
    imgURL: {
      type: String,
    },
    branch: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },

  {
    timestamps: true,
  }
);

/*bookSchema.plugin(AutoIncrement, {
  inc_field: "ticket",
  id: "ticketNums",
  start_seq: 500,
});*/

module.exports = mongoose.model("Book", bookSchema);
