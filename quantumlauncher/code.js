document.addEventListener("DOMContentLoaded", function () {
    document
        .querySelectorAll(".code-container")
        .forEach((container) => {
            const button = container.querySelector(".code-copy");
            const code = container.querySelector("code");

            button.addEventListener("click", async () => {
                try {
                    await navigator.clipboard.writeText(
                        code.innerText,
                    );

                    button.classList.add("code-copied");
                    button.innerHTML =
                        '<img src="/quantumlauncher/icons/checkbox.svg"/>';

                    setTimeout(() => {
                        button.innerHTML =
                            '<img src="/quantumlauncher/icons/copy.svg"/>';
                        button.classList.remove("code-copied");
                    }, 400);
                } catch (err) {
                    console.error("Failed to copy: ", err);
                }
            });
        });
});
