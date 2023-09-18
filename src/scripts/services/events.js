import { baseUrl, maxItems } from "../variables.js";

async function getEvents(userName) {
    const url = `${baseUrl}${userName}/events?per_page=${maxItems}`;
    const response = await fetch(url);
    return await response.json();
};

export {getEvents};