
export function keyReader(event) {
    const bannedKey = {
        Shift: "Shift",
        Control: "Control",
        Alt: "Alt",
        CapsLock: "CapsLock",
        Tab: "Tab",
        Escape: "Escape",
        Backspace: "Backspace",
        Enter: "Enter",
        ArrowUp: "ArrowUp",
        ArrowDown: "ArrowDown",
        ArrowLeft: "ArrowLeft",
        ArrowRight: "ArrowRight",
    }

    if (!bannedKey[event.key]) {
        return event.key;
    }

    return 'not_a_letter';


}