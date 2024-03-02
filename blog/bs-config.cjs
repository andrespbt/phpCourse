module.exports = {
    proxy: "localhost:8000", // Change this to your PHP server address
    files: ["**/*.php", "./resources/views/**/*.php"], // Monitor PHP files
    port: 3000, // Port for browser-sync UI
    ui: {
        port: 3000, // Port for browser-sync UI
    },
    open: false, // Don't open a new browser window automatically
    notify: false, // Disable notifications
};
