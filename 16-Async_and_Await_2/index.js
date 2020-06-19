function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 3000);
    });
}


// Method 1
resolveAfter3Seconds().then((data => {
    console.log(data);
}));


// Method 2
async function getAsyncData() {
    const result = await resolveAfter3Seconds();
    console.log(result);
}


getAsyncData();