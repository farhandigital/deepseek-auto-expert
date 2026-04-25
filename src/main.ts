// @ts-ignore isolatedModules
const PREFIX = '[deepseek-auto-expert]';
const TARGET_URL = 'https://chat.deepseek.com/';

function main () {
	if (window.location.href !== TARGET_URL) {
		console.log(`${PREFIX} Not on new chat page`);
		return;
	}

    const selector = '[data-model-type="expert"]';
    const targetElement: HTMLElement | null = document.querySelector(selector);
    if (!targetElement) {   
        console.log(`${PREFIX} Element not found`);
        return;
    }
    if (targetElement.getAttribute('aria-checked') === 'true') {
        console.log(`${PREFIX} Element is already checked`);
        return;
    }

    // For some reason, the button require two .click() to take effect, but our persistent setInterval should handle it. 
    targetElement.click();
}

setInterval(main, 500);
