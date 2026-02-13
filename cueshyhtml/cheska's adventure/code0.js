gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDWinter_9595BackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDWinter_9595BackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDPLAY_9595BUTTONObjects1= [];
gdjs.Untitled_32sceneCode.GDPLAY_9595BUTTONObjects2= [];
gdjs.Untitled_32sceneCode.GDGold_9595IngotObjects1= [];
gdjs.Untitled_32sceneCode.GDGold_9595IngotObjects2= [];
gdjs.Untitled_32sceneCode.GDAppleObjects1= [];
gdjs.Untitled_32sceneCode.GDAppleObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
elseEventsChainSatisfied = true;
}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PLAY_BUTTON"), gdjs.Untitled_32sceneCode.GDPLAY_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPLAY_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPLAY_9595BUTTONObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPLAY_9595BUTTONObjects1[k] = gdjs.Untitled_32sceneCode.GDPLAY_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPLAY_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene2", false);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDWinter_9595BackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWinter_9595BackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPLAY_9595BUTTONObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPLAY_9595BUTTONObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGold_9595IngotObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGold_9595IngotObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAppleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAppleObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDWinter_9595BackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWinter_9595BackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPLAY_9595BUTTONObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPLAY_9595BUTTONObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGold_9595IngotObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGold_9595IngotObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAppleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAppleObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
