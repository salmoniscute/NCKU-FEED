import { createApp } from 'vue';
import router from './router';
import './style.css';
import App from './App.vue';
import Home from './view/Home.vue';
import Login from './view/Login.vue';
import PersonalEdit from './view/auth/PersonalEdit.vue';
import MyUserPage from './view/auth/MyUserPage.vue';
import OtherUserPage from './view/OtherUserPage.vue';
import DiaryEditor from './view/auth/DiaryEditor.vue';
import Diary from './view/Diary.vue';
import { user } from './class.js';

// createApp(App).mount('#app');
// createApp(Login).mount('#login');
// createApp(PersonalEdit).mount('#personalEdit');
// createApp(MyUserPage).mount('#myUserPage');
// createApp(OtherUserPage).mount('#otherUserPage');
// createApp(DiaryEditor).mount('#diary-editor');
// createApp(Diary).mount('#diary');
const app = createApp(App);
app.use(router);
app.mount('#app');
