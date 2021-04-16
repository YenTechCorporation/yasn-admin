
import {Admin, Resource} from 'react-admin'
import {FirebaseAuthProvider,FirebaseDataProvider,FirebaseRealTimeSaga} from 'react-admin-firebase';
import {PostList} from './Posts/PostList'
import {PostCreate} from './Posts/PostCreate'
import {PostEdit} from './Posts/PostEdit'
import {AuthorCreate, AuthorList, AuthorEdit} from './Authors'
import {CategoryCreate, CategoryList, CategoryEdit} from './Categories'
import {EventCreate, EventList, EventEdit} from './Events'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3trBryz24q7GkXh5hbBHER2Y5FpE2McE",
  authDomain: "africa-young-scholars.firebaseapp.com",
  projectId: "africa-young-scholars",
  storageBucket: "africa-young-scholars.appspot.com",
  messagingSenderId: "834357430472",
  appId: "1:834357430472:web:73fae718b55bf7685abdfd",
  measurementId: "G-0LGTCL03ZP"
};

const dataProvider = FirebaseDataProvider(firebaseConfig);//
const authProvider = FirebaseAuthProvider(firebaseConfig);

function App() {
  return (
   <Admin 
      // dashboard={Dashboard} 
      dataProvider={dataProvider} 
      authProvider={authProvider}
      // customSagas={[firebaseRealtime]}
      >
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit}/>
        <Resource name="comments" list={PostList} />
        <Resource name="events" list={EventList} create={EventCreate} edit={EventEdit}/>
        <Resource name="categories" list={CategoryList}  create={CategoryCreate} edit={CategoryEdit} />
        <Resource name="authors" list={AuthorList}  create={AuthorCreate} edit={AuthorEdit} />
      </Admin>
  );
}

export default App;
