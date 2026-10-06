class Solution {
        /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
      // if(s.length >= 1 && s.length < 100000){
      //   return false;
      // }
      let left = 0;
      let right = s.length - 1;
      while(left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
      }
    }
}
let s = ["n","e","e","t"]
let solution = new Solution();
solution.reverseString(s);

console.log(s);