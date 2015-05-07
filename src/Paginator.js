/**
 * Created by Cenk Çetinkaya on 5/6/15.
 */


"use strict"

/**
 *
 * @param source {Array}
 * @param strategy {PagingStrategyBase}
 * @constructor
 */
var Paginator = function(source, strategy) {
    var _currentPage = 1;
    var _source      = source;
    var _strategy    = strategy;
    var _pagesCount = 0;

    function invalidate() {
        _pagesCount = Math.ceil(_source.length / _strategy.getItemsPerPage());
        _currentPage = 1;
    }

    /**
     *
     * @returns {PagingStrategyBase}
     */
    this.getStrategy = function () {
        return _strategy;
    };

    this.getPagesCount = function () {
      return _pagesCount;
    };

    this.setSource = function (src) {
        _source = src;
        invalidate();
    };

    this.changePage = function (pageNum) {
        _currentPage = pageNum;
    };

    /**
     *
     * @returns {Number}
     */
    this.getDataLength = function () {
        return _source.length;
    };

    this.getItemsCountPerPage = function () {
        return _strategy.getItemsPerPage()
    };

    this.setCurrentPage = function (value) {
        _currentPage = value;
    };

    this.getCurrentPage = function () {
        return _currentPage;
    };

    invalidate();

};

/**
 * Gets
 * @returns {Array}
 */
Paginator.prototype.getPagesNumbersInRange = function () {
    var strategy = this.getStrategy();
    var nums = strategy.getPagesNumbersInRange();

    var visiblePages = [];

    for (var i = nums.start; i < nums.end; i++)
    {
        if (i <= this.getPagesCount()) visiblePages.push(i);
    }

    return visiblePages;
};

Paginator.prototype.getCountItemsonCurrentPage = function() {
    if (this.getCurrentPage() == this.getPagesCount)
    {
        return this.getDataLength() - ((this.getCurrentPage()- 1) * this.getItemsCountPerPage())
    }
    else
    {
        return this.getItemsCountPerPage();
    }
};

/**
 *
 * @returns {Iterator}
 */
Paginator.prototype.getSource = function() {
    return new Iterator(this.data[pageOffset]);
};

Paginator.prototype.hasNextPage = function() {
};

Paginator.prototype.hasPrevPage = function() {
};

Paginator.prototype.prevPage = function() {
};

Paginator.prototype.nextPage = function() {
};


var PaginatorEvents = {
    PAGE_CHANGED:"paginator:page-changed",
    SOURCE_CHANGED:"paginator:source-changed"
};


module.exports = Paginator;