addEventListener('scheduled', event => {
    event.waitUntil(handleRequest())
})

async function handleRequest() {
    console.log("===============[start]================");
    const urlToCheck = 'https://www.right.com.cn/FORUM/?fromuid=974768'; // 需要监控的URL
    try {
        let response = await fetch(urlToCheck);
        
        if (!response.ok) { // 如果状态码不是200-299之间
            console.error(`Resource ${urlToCheck} is fail with status ${response.status}`);
        }
        console.log(`===============[end] with status ${response.status}================`);
        return new Response('Check completed.', { status: 200 });
    } catch (error) {
        console.error(`Failed to reach resource ${urlToCheck}: ${error.message}`);
        console.log("===============[end]================");
        return new Response('Error occurred during checking.', { status: 500 });
    }
}
