/* eslint linebreak-style: ["error", "windows"] */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        const regex = new RegExp(
          // eslint-disable-next-line no-useless-escape
          '^https?:\/\/([w]{3}\d?\.)?(((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)+[a-z]{2,}))(:(1[0-9]|[2-9][0-9]|[1-9][0-9]{2,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?(\/|(\/?[-_a-z0-9]+\/?)*[#]?)?([.](jpg|jpeg|gif|png|tiff|tif|bmp))?$',
        );
        return regex.test(v);
      },
    },
  },
});

module.exports = mongoose.model('user', userSchema);
