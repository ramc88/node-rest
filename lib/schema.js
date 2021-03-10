function pre(schema) {
  // eslint-disable-next-line func-names
  schema.pre(/^find/, function (next) {
    if (!this.where()._conditions) {
      this.where({
        _deletedAt: {
          $exists: false,
        },
      });
    } else if (!this.where()._conditions._deletedAt) {
      this.where({
        _deletedAt: {
          $exists: false,
        },
      });
    }
    // if (this._update) {
    //   this._update._updatedAt = new Date();
    // }
    return next();
  });

  // eslint-disable-next-line func-names
  schema.pre('count', function (next) {
    if (!this.where()._conditions) {
      this.where({
        _deletedAt: {
          $exists: false,
        },
      });
    } else if (!this.where()._conditions._deletedAt) {
      this.where({
        _deletedAt: {
          $exists: false,
        },
      });
    }
    return next();
  });

  // eslint-disable-next-line func-names
  schema.pre('save', function (next) {
    if (this.isNew) {
      this._createdAt = new Date();
      this._updatedAt = this._createdAt;
    } else {
      this._updatedAt = new Date();
    }
    return next();
  });

  // eslint-disable-next-line func-names
  schema.pre(/update/i, function (next) {
    if (this._update && !this._update._updatedAt) {
      this._update._updatedAt = new Date();
    }
    return next();
  });
}

module.exports = {
  pre,
};