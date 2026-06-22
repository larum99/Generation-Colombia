export default {
    // Indica a Jest que genere los reportes de cobertura automáticamente
    collectCoverage: true,

    // Define las carpetas de donde debe medir el porcentaje
    collectCoverageFrom: ["*.js", "src/**/*.js"],

    // Evita medir cobertura en los archivos de prueba o dependencias
    coveragePathIgnorePatterns: ["/node_modules/", "\\.test\\.js$"],

    // Formatos que la extensión de VS Code necesita leer
    coverageReporters: ["text", "lcov", "json-summary"]
};
