import { IDGB_ID, IDGB_PASS } from "$env/static/private";
import { writable } from "svelte/store";

const header = writable({
    method: "POST",
    headers: {
        "Client-ID": IDGB_ID,
        "Authorization": `Bearer ${IDGB_PASS}`,
        "Content-Type": "application/json"
    },
    body: "fields name; limit 10;"
})

export default header;