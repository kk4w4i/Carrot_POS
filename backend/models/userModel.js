const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema

const userSchema = new Schema({
    businessName: {
        type: String,
        required: true,
        unique: false
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({ email });

    if (!user) {
        throw Error('A user with that username does not exist');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error('Invalid password');
    }

    return user;
};

userSchema.statics.signup = async function(businessName, slug, email, password) {
    if (!businessName || !slug || !email || !password) {
      throw Error('All fields must be filled');
    }
  
    // Check if email or url already exists
    const existingUser = await this.findOne({
      $or: [{ email }, { slug }]
    });
  
    if (existingUser) {
      switch (true) {
        case existingUser.email === email:
          throw Error('Email already in use');
        case existingUser.slug === slug:
          throw Error('URL already in use');
      }
    }
  
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
  
    const user = await this.create({ businessName, slug, email, password: hash });
  
    return user;
  };

module.exports = mongoose.model('User', userSchema)