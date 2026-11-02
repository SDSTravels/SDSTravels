const whatsappNumber = "917377477773";

document.querySelectorAll(".footer-contact form").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const fields = new FormData(form);
        const message = [
            "New website enquiry for Sri Divya Sai Travels",
            "",
            ...[...fields.entries()]
                .filter(([, value]) => String(value).trim())
                .map(([name, value]) => `${name}: ${String(value).trim()}`)
        ].join("\n");

        window.location.assign(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
    });
});
