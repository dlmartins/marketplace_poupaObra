module.exports = {
    // Define o padrão de arquivo que o Jest usará para procurar arquivos de teste
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
    testPathIgnorePatterns: ["/node_modules/"],
    testEnvironment: "jsdom",
      "testEnvironmentOptions": {
        "url": "http://localhost"
      }
  };
  