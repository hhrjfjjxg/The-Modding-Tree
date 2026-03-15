addLayer("p",{
    name: "gronk phonk", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "gp", // This appears on the layer's node. Default is the id with the first letter capitalized
    branches: [ ["g", "#ffffff"] ],
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        best: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "gronk phonk", // Name of prestige currency
    baseResource: "rizz", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    doReset(resettingLayer) {
        let keep = [];
        if (layers[resettingLayer].row > this.row) layerDataReset("p", keep);
    },
        upgrades: {
            11: {
            title: "The first step up!",
            description: "1.3x rizz gain",
            cost: new Decimal(2),
            },
            12: {
            title: "labubu",
            description: "labubu is yum 1.4x rizz gain",
            cost: new Decimal(5),
            },
            13: {
            title: "labubu phonk",
            description: "get views like a good boy 1.1 multiplier for every gronk phonk",
            cost: new Decimal(10),
            effect() {
        return player[this.layer].points.add(1).pow(0.1)
        },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            },
            14: {
            title: "streams",
            description: "multiply your rizz gain by 1.5",
            cost: new Decimal(15),
            },
            15: {
            title: "malware",
            description: "inject malware! for every gronk phonk you get a 1.2 multiplier to rizz gain",
            cost: new Decimal(25),
            effect() {
        return player[this.layer].points.add(1).pow(0.2)
        },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            },
            26: {
            title: "skibidi slicers",
            description: "we are getting there! 1.5x multiplier",
            cost: new Decimal(50),
            },
            27: {
            title: "skibidi toliet",
            description: "skibidi toliet edits every gronk phonk is 1.32 multiplier to rizz gain",
            cost: new Decimal(100),
            effect() {
        return player[this.layer].points.add(1).pow(0.32)
        },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            },
            28: {
            title: "skibidi toilet videos",
            description: "we are not getting through life with this one 1.67 multiplier to rizz gain",
            cost: new Decimal(300),
            },
            
        },
})
addLayer("g", {
    name: "mewing grind", 
    symbol: "mg", 
    position: 0, 
    row: 1, 
    startData() { return {
        unlocked: true, 
        points: new Decimal(0),
    }},
    color: "#ff0000",
    requires: new Decimal(100), 
    resource: "mewing points", 
    baseResource: "gronk phonk", 
    baseAmount() {return player.p.points},
    baseAmount() { return player.p.best }, 
    type: "normal", 
    exponent: 0.5,
    gainMult() { return new Decimal(1) },
    gainExp() { return new Decimal(1) },
    row: 1, 
    layerShown() { return true },
    hotkeys: [
        {key: "g", description: "G: Reset for mewing points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
            title: "mewing boost",
            description: "Double your rizz gain.",
            cost: new Decimal(500),
        },
    },
})
