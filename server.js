//Using a hashmap to store ips and their counts
let ipAddresses = new Map();
//Using an ordered array to store the top 100 most visited ips
let topHundred = [];

// Test data
const ips = ['236.220.120.242',
'146.27.49.171',
'68.46.248.148',
'66.253.65.55',
'178.208.12.11',
'4.97.86.188',
'224.122.14.232',
'194.60.17.81',
'210.10.232.26',
'35.194.252.33',
'35.194.252.33',
'35.194.252.33',
'35.194.252.33',
'4.97.86.188',
'4.97.86.188',
'5.23.12.111']

const  request_handled = (ip_address) => {
    // Retrieves the ip count from the hash map or sets it as 0 if it is a new element
    const existingAddressCount = ipAddresses.get(ip_address) || 0;
    const newAddressCount = existingAddressCount + 1;
    ipAddresses.set(ip_address, newAddressCount);

    const newIpObject = { ip_address, count: newAddressCount};

    //Removes the old element from the array for simplicity O(100)
    topHundred = topHundred.filter(item => item.ip_address !== ip_address);

    // Loops through the array to insert the new value at the correct spot
    if(topHundred.length === 0) {
        topHundred.push(newIpObject);
    } else {
        for (let i = 0; i < topHundred.length; i++) {
            if(i === topHundred.length - 1) {
                if(newAddressCount > topHundred[topHundred.length - 1].count) {
                    topHundred.push(newIpObject);
                    break;
                } else {
                    topHundred.unshift(newIpObject);
                    break;
                }
            } else if (newAddressCount <= topHundred[i + 1].count) {
                if (i === 0) {
                    topHundred.unshift(newIpObject);
                } else {
                    topHundred.splice(i + 1, 0, newIpObject);
                    break;
                }
            }
        }
        // If the array is full, the lowest count, newest item is removed
        if (topHundred.length > 100) {
            topHundred.shift();
        }
    }
}

// Returns the top 100 array in the correct order
const getTopHundred = () => {
    console.log(topHundred.reverse());
    return topHundred.reverse();
}

// Resets the data structures for a new day
const clear = () => {
    ipAddresses = new Map();
    topHundred = [];
}

//Used for testing
for(let i = 0; i < ips.length; i++) {
    request_handled(ips[i])
}


