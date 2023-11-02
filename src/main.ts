import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';

import { AppModule } from './app/app.module';

//main.ts

import { awarns } from '@awarns/core';
import { appTasks } from './app/features/tasks';
import { appTaskGraph } from './app/features/graph';
import { registerHumanActivityPlugin } from '@awarns/human-activity';
import { registerNotificationsPlugin } from '@awarns/notifications';
import { registerPersistencePlugin } from '@awarns/persistence';



awarns
  .init(
    appTasks, 
    appTaskGraph, 
    [
     
      
      registerHumanActivityPlugin(),
      
      registerNotificationsPlugin('App notifications'),
      
      registerPersistencePlugin({
        oldRecordsMaxAgeHours: 7 * 24 
      }),
    ],
    {
     
      enableLogging: true,
      
    }
  
    
  
    )
  .then(() => console.log('AwarNS framework successfully loaded'))
  .catch((err) => {
    console.error('Could not load AwarNS framework:', err);
  });



runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});











