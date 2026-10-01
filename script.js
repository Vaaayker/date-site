const slider = document.querySelector(".slider");

let currentPage = 0;

const WORKER_URL =
    "https://date-invitation.maksimbereznak44.workers.dev/";


function goToPage(pageIndex) {
    if (pageIndex < 0 || pageIndex > 2) {
        return;
    }

    currentPage = pageIndex;

    slider.style.transform =
        `translateX(-${currentPage * 100}vw)`;
}


async function sendChoice(choice) {
    try {
        const response = await fetch(WORKER_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                choice: choice
            })
        });

        if (!response.ok) {
            throw new Error("Worker request failed");
        }

        showChoiceSuccess();

    } catch (error) {
        console.error("Помилка відправки:", error);

        alert(
            "Не вдалося відправити вибір 😔\n" +
            "Спробуй ще раз."
        );
    }
}


function showChoiceSuccess() {
    const buttons = document.querySelectorAll(".date-option");

    buttons.forEach((button) => {
        button.disabled = true;
        button.style.cursor = "default";
        button.style.opacity = "0.65";
    });

    const message = document.createElement("p");

    message.textContent = "Твій вибір прийнято ❤️";

    message.style.marginTop = "20px";
    message.style.fontSize = "1.2rem";
    message.style.textAlign = "center";

    const options = document.querySelector(".date-options");

    options.insertAdjacentElement(
        "afterend",
        message
    );
}


