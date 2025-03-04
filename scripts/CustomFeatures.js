console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
});

Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available.");
});

// Adds a new "Instinct" class feature type
Hooks.once("init", () => {
  CONFIG.DND5E.featureTypes.class.subtypes.instinct = "Hunters Instinct";
});

// Adds a new "Necromantic Power" class feature type
Hooks.once("init", () => {
  CONFIG.DND5E.featureTypes.class.subtypes.necropower = "Necromantic Power";
});