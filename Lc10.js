//Intersection of Two Arrays II
function intersect(nums1, nums2) {
    const map = new Map();
    const result = [];

    for (let num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let num of nums2) {
        if (map.has(num) && map.get(num) > 0) {
            result.push(num);
            map.set(num, map.get(num) - 1);
        }
    }

    return result;
}
