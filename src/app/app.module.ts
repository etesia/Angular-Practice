import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestingComponent } from './testing/testing.component';
import { ComAPIComponent } from './com-api/com-api.component'; // two-way binding
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { PasswordComponent } from './password/password.component';
import { PanelContentComponent } from './panel-content/panel-content.component';
import { ZippyContentComponent } from './zippy-content/zippy-content.component';
import { IconsComponent } from './icons/icons.component';

// import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    ComAPIComponent,
    PanelComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    PasswordComponent,
    PanelContentComponent,
    ZippyContentComponent,
    IconsComponent,
    TodoListComponent
    // ZippyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'password', component: PasswordComponent},
      { path: 'panel-content', component: PanelContentComponent},
      { path: 'zippy-content', component: ZippyContentComponent},
      { path: 'icons', component: IconsComponent},
      { path: 'contact-form', component: ContactFormComponent},
      { path: 'todo-list', component: TodoListComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
