# IpAddresses

I used a hash map to store key value pairs with the key corresponding to an ip address and the value corresponding to the number of times a request
has been handled for that ip address. I additionally used an ordered array to keep track of the 100 most common ip addresses. With each new request,
I checked if the ip address exists in the hash map and if it did I incremented the count. If it didn't exist, I created a new entry. I then removed the
existing ip from the Top 100 array, and then inserted the new value with the incremented count. If the array exceeded 100 items, I removed the smallest
count in order to preserve the size. In my function to get the top 100 ips, I simply returned this array.

The runtime complexity of my solution is constant at a maximum of O(100) since Hash Map insertions and lookups are constant and I loop over the 100 
items twice: once when filtering, and once when inserting. The complexity of my getTopHundred function is also constant at O(100) since I reverse the array.

If I had more time I would avoid the two loops in the handle request function (filter and insertion) and complete these operations within a single for loop.
This would cut the runtime effectively in half but would not change the order of magnitude. I would also manipulate the array in descending order so I don't
have to call the reverse method when returning the array. Additionally, if the requirement was to return a variable number of top ip addresses, I would use
a different data structure since the insertion into the ordered array could take O(n) time where n is the number of ip addresses needed. I would use a max heap
to solve this problem, which would have a slower insertion time, but a quicker O(nlogn) retrieval time for the top results. Because the instructions fixed the
number of results at 100, the max number of operations needed in the array insertion is fixed at a constant value.

I decided not to pursue the max heap method because of time constraints preventing me from implementing a whole data structure in javascript. I decided not to
use only an array because the O(1) lookup time of the hash map increased the efficiency.

I did some testing by passing smaller data sets into the functions and decreasing the max number of ip addresses. More testing could be done like this,
with an expected output and a smaller scale input. I would heavily test edge cases. The time needed to run on larger data sets could also be tested.
