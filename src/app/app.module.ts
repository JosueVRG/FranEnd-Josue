import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgentinaProgramaComponent } from './components/logo-argentina-programa/logo-argentina-programa.component';
import { LogoSocialMediaComponent } from './components/logo-social-media/logo-social-media.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/new-educacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { HardysoftskillsComponent } from './components/hardysoftskills/hardysoftskills.component';
import { EdithyssComponent } from './components/hardysoftskills/edithyss.component';
import { NewhyssComponent } from './components/hardysoftskills/newhyss.component';
import { NewproyectoComponent } from './components/proyectos/nuevoproyecto.component';
import { EditProyectoComponent } from './components/proyectos/editproyecto.component';
import { EditpersonaComponent } from './components/acerca-de/editpersona.component';
import { NewpersonaComponent } from './components/acerca-de/newpersona.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgentinaProgramaComponent,
    LogoSocialMediaComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    HardysoftskillsComponent,
    EdithyssComponent,
    NewhyssComponent,
    NewproyectoComponent,
    EditProyectoComponent,
    EditpersonaComponent,
    NewpersonaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({

    }),
    HttpClientModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
