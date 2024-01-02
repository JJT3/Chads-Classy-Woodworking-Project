import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
(global as {window: unknown}).window = global; //Why did this work?

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
