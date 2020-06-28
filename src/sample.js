const mod = "SampleClass";

export class SampleClass {

    targetsTable = {};

    static async ready() {
        NPCTargeting = window.NPCTargeting;
     
        try {
            SampleClass.targetsTable = new TargetsTable(mod);
        } catch(error) {
            ui.notifications.error("You need to load the Lib-Targeting Module");
        }
        
        NPCTargeting.init(SampleClass.targetsTable);
    } // -- end ready

    
    static async targetTokenHandler(user,token,targeted) {
        await NPCTargeting.targetTokenHandler(user,token,targeted);
 
        console.log(mod,"Token is Targeted By:", SampleClass.targetsTable.getTargetSources(token));
        console.log(mod,"User is targeting:", SampleClass.targetsTable.getSourceTargets(user));
    }

    static async controlTokenHandler(token, tf) {
        await NPCTargeting.controlTokenHandler(token, tf);
    }
}

Hooks.on("ready",SampleClass.ready);
Hooks.on("targetToken", SampleClass.targetTokenHandler);
Hooks.on("controlToken",SampleClass.controlTokenHandler);