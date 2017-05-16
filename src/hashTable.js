function HashTable(obj) {
  this.size = 0;
  this.items = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      this.items[key] = obj[key];
      this.size++;
    }
  }

  this.put = function(key, value) {
    var previous = undefined;
    if (this.hasItem(key)) {
        previous = this.items[key];
    }
    else {
        this.size++;
    }
    this.items[key] = value;
    return previous;
  }

  this.get = function (key) {
    return this.hasItem(key) ? this.items[key] : undefined;
  }

  this.contains = function (key) {
    // return this.items.hasOwnProperty(key);
    return this.hasItem(key)
  }

  this.remove = function () {
    if (this.hasItem(key)) {
    previous = this.items[key];
    this.size--;
    delete this.items[key];
    return previous;
    }
    else {
        return undefined;
    }
  }

  this.iterate = function (cb) {
    for (var key in this.items) {
      if (this.hasItem(key)) {
          fn(key, this.items[key]);
      }
    }
  }

  this.hash = function (key) {
    if (this.hasItem(key)) {
      var hash = 0, strlen = this.items[key].length, i, c;
      if ( strlen === 0 ) {
        return hash
      }
      for ( i = 0; i < strlen; i++ ) {
        c = s.charCodeAt( i );
        hash = ((hash << 5) – hash) + c;
        hash = hash & hash; // Convert to 32bit integer
      }
      return hash;
    } else {
      return undefined;
    }
  }

  this.clear = function() {
    this.items = {}
    this.length = 0;
  }

  this.values = function() {
    var values = [];
    for (var k in this.items) {
      if (this.hasItem(k)) {
        values.push(this.items[k]);
      }
    }
    return values;
  }

}
