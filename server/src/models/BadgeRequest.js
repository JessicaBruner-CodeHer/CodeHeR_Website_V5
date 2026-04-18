import mongoose from "mongoose";

const badgeRequestSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true, trim: true },
    firstName:   { type: String, required: true, trim: true },
    lastName:    { type: String, required: true, trim: true },
    email:       { type: String, required: true, trim: true },
    agreementAccepted: { type: Boolean, required: true },
    intentType:        { type: String, required: true, trim: true }, // 'commit' | 'interested'
    badgeSelection:    { type: String, trim: true },
  },
  { timestamps: true }
);

const BadgeRequest = mongoose.model("BadgeRequest", badgeRequestSchema);

export default BadgeRequest;
