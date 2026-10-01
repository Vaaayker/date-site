function scrollToPage(pageId) {
    const page = document.getElementById(pageId);

    if (!page) {
        return;
    }

    page.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


