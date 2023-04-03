import { PUBLIC_IDGB_ID, PUBLIC_IDGB_PASS } from "$env/static/public";
import { writable } from "svelte/store";

const header = writable({
    method: "POST",
    headers: {
        "Client-ID": PUBLIC_IDGB_ID,
        "Authorization": `Bearer ${PUBLIC_IDGB_PASS}`,
        "Content-Type": "application/json"
    },
})

export default header;