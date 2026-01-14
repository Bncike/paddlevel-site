// jelszavak.js - IDE MENTED EL A KIADOTT JELSZAVAKAT
const VALID_PASSWORDS = {
    // Formátum: jelszó: {termék, email, aktív}
    "APT2024-001": {
        product: "AP1.3",
        email: "vasarlo1@gmail.com",
        active: true,
        purchased: "2024-01-15"
    },
    "APT2024-002": {
        product: "AP2.5", 
        email: "vasarlo2@gmail.com",
        active: true,
        purchased: "2024-01-16"
    }
    // Új vásárlásnál ide írod hozzá!
};

// Hozzáférési jogok
const USER_ACCESS = {
    // Ha valaki több jegyzetet vett
    "APT2024-001": ["AP1.3", "AP1.4"],
    "APT2024-002": ["AP2.5", "AP2.6"]
};