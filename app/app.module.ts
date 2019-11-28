import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';

import { AppComponent } from './app.component';
import { BatteryLevelComponent } from './battery-level/battery-level.component';
import { AccelerometerComponent } from './accelerometer/accelerometer.component';
import { GyroscopeComponent } from './gyroscope/gyroscope.component';
import { HumidityComponent } from './humidity/humidity.component';
import { MagnetometerComponent } from './magnetometer/magnetometer.component';
import { PressureComponent } from './pressure/pressure.component';
import { TemperatureComponent } from './temperature/temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    BatteryLevelComponent,
    AccelerometerComponent,
    GyroscopeComponent,
    HumidityComponent,
    MagnetometerComponent,
    PressureComponent,
    TemperatureComponent,
  ],
  entryComponents: [
    BatteryLevelComponent
  ],
  imports: [
    BrowserModule,
    WebBluetoothModule.forRoot({
      enableTracing: true
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }