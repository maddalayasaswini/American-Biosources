document.addEventListener("DOMContentLoaded", () => {
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    let captchaValue = "";

    // Generate Captcha
    const generateCaptcha = () => {
        let value = btoa(Math.random() * 1000000000);
        value = value.substr(0, 5 + Math.floor(Math.random() * 5));
        captchaValue = value;
    };

    // Display Captcha
    const setCaptcha = () => {
        const preview = document.querySelector(".captcha .preview");
        if (!preview) return;
        const html = captchaValue
            .split("")
            .map((char) => {
                const rotate = -20 + Math.floor(Math.random() * 30);
                const font = Math.floor(Math.random() * fonts.length);
                return `<span style="transform:rotate(${rotate}deg); font-family:${fonts[font]}; display:inline-block;">${char}</span>`;
            })
            .join("");
        preview.innerHTML = html;
    };

    // Initialize Captcha and set refresh handler
    const initCaptcha = () => {
        generateCaptcha();
        setCaptcha();

        const refreshBtn = document.querySelector(".captcha-refresh");
        refreshBtn.addEventListener("click", (e) => {
            e.preventDefault();
            generateCaptcha();
            setCaptcha();
            document.querySelector(".captcha-input").value = "";
        });
    };

    initCaptcha();

    // Add form submit event listener for captcha validation
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (e) => {
        const userInput = document.querySelector(".captcha-input").value.trim();
        if (userInput !== captchaValue) {
            e.preventDefault(); // Prevent form submit if captcha doesn't match
            alert("Captcha is incorrect. Please try again.");
            document.querySelector(".captcha-input").value = "";
            generateCaptcha();
            setCaptcha();
        }
    });
});