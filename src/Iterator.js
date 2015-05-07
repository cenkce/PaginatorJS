/**
 * Created by Cenk Çetinkaya on 5/6/15.
 *
 * Iterator Pattern Implementation
 */

/**
 * @param data Array.<T>
 * @constructor
 */
var Iterator = function (data) {
    /**
     * new data array reference
     * @type {Array.<T>|null}
     */
    this.data = data.concat();

    /**
     * @type {number}
     */
    this.index = 0;
};


/**
 * @returns {*}
 */
Iterator.prototype.data = function () {
    return data[this.index];
};

/**
 * @returns {number}
 */
Iterator.prototype.getIndex = function () {
    return index;
};

/**
 * has next data item?
 * @returns {boolean}
 */
Iterator.prototype.hasNext = function () {
    return this.index < this.data.length;
};

/**
 * Has previous data item?
 * @returns {boolean}
 */
Iterator.prototype.hasPrev = function () {
    return this.index > 0;
};

/**
 * increase index to next
 */
Iterator.prototype.next = function () {
    if(this.hasNext())
        this.index++;
};

/**
 * decrease index to previous
 */
Iterator.prototype.prev = function () {
    if(this.hasPrev())
        this.index--;
};

/**
 * get data length
 */
Iterator.prototype.length = function () {
    this.data = data;
};

/**
 * Destroy iterator data
 */
Iterator.prototype.destroy = function () {
    this.data = [];
    this.index = 0;
};
