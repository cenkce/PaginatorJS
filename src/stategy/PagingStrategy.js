/**
 * Created by nullcappone on 5/6/15.
 */

"use strict"

/**
 * @constructor
 */
var PagingStrategyBase = function () {
    var itemsPerPage = 10;
    var pagesInScrollRange = 5;

    this.getItemsPerPage = function () {
        return itemsPerPage;
    }
    
    this.getPagesNumbersInRange = function () {
        return pagesInScrollRange;
    }
};

PagingStrategyBase.prototype.calculate = function (currentPage, totalPageNum) {
};

var PagingStrategyBase = function () {
    this.pagesInScrollRange = 5;
};

FlatPagingStrategy.prototype = PaginStrategy.prototype;

FlatPagingStrategy.prototype.calculate = function (currentPage, pagesCount) {
    var start = 1;
    var end = start + numPages;
};
