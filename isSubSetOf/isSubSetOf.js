/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */
/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */
 Array.prototype.includes = function (element) {
 	for(var i=0; i<this.length; i++) {
 		if (typeof(this[i]) == 'object') {
 			if (Array.isArray(this[i])) {
 				if (this[i].includes(element)) {
 					return true;
 				}
 			} else if (Object.values(this[i]).includes(element)){
 				return true;
 			}
 		} else if (this[i] === element) {
 			return true;
 		}
 	}
 	return false;
 }
 Array.prototype.isSubsetOf = function (arr) {
    // your code here
    
    for(var i=0; i<this.length; i++) {
    	if (typeof(this[i]) == 'object') {
    		if (Array.isArray(this[i])) {
    			if(!this[i].isSubsetOf(arr)) {
    				return false;
    			}
    		} else if (!Object.values(this[i]).isSubsetOf(arr)){
    			return false;
    		}
    	} else if (!arr.includes(this[i])) {
    		return false;
    	}
    }
    return true;
};