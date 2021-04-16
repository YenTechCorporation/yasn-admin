import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import {
    Create,SimpleForm,
    EmailField,NumberInput,AutocompleteInput,
    TextInput,ImageInput,ImageField, List,Datagrid,
    TextField,SimpleList,Edit, ReferenceInput,SelectInput,
    EditButton,DateInput 
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    required,
    minLength,
    maxLength,
    email,
} from 'react-admin';

const validateName = [required(), minLength(3), maxLength(35)];
const validateEmail = email();



const useStyles = makeStyles((theme) => ({
    create:{
      margin:10,
      paddingLeft:100,
      paddingRight:100,
      alignSelf:'center',
      width:'90%'
    },
    form:{
      marginLeft:100,
      marginRight:100,
      backgroundColor:'yellow'
    },
    formField:{
      margin:10,
      padding:10,
      width:'50%',
      backgroundColor:'white',
      color:'black',
      textdecoration:'none',
      fontSize:25,
      fontWeight:'bold',
    },
    image: {
      width:"70%",
      height:"70%",
      backgroundColor:'white',
      color:"orange"
    },
    selectedImg:{
      width:"100%",
      height:"100%",
    },
    richText:{
      margin:10,
      padding:10,
      height:500,
      width:'50%',
      backgroundColor:'white'
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input:{
        width:600,
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



export function EventCreate(props){
    const classes = useStyles();    
    const configureQuill = quill => quill.getModule('toolbar').addHandler('bold', function (value) {
      this.quill.format('bold', value)
  });
  const transform = data => ({
    ...data,
    id: `${data.title.trim()}`
});
var category = [
 {id:"medecine",name:"Medecine"},{id:"science",name:"Science"},{id:"politiques",name:"Politiques"}
]
   return(
    <Create {...props} className={classes.create} transform={transform}>
    <SimpleForm className={classes.form} redirect="list">

         <TextInput source="title" className={classes.formField} label="" 
         placeholder="Entrez le tire de l'evenement"
         validate={validateName}/>

         <ReferenceInput source="authorId" 
         reference="authors" label="Selectionnez l'auteur" 
         className={classes.formField} filterToQuery = {searchText => ({ title: searchText })}>
           <AutocompleteInput optionText="id" />   
         </ReferenceInput>

         <ReferenceInput source="category" reference="categories" 
         label="Selectionnez la categorie" className={classes.formField}
         filterToQuery = {searchText => ({ title: searchText })}>
              <AutocompleteInput optionText="name" label=" "/> 
         </ReferenceInput>

         <DateInput source="date" label="Entrez la date"/>

         <ImageInput source="src" accept="image/*.jpg,.jpeg,.gif,.png" label="" 
         placeholder="Selectionnez une image de l'evenement" className={classes.image}>
             <ImageField source="original"  className={classes.selectedImg}/>
         </ImageInput>
     </SimpleForm>
 </Create>
   )
        }

export const EventList = props => {
            const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
            return (
                <List {...props}>
                    {isSmall ? (
                        <SimpleList
                            primaryText={record => record.title}
                            secondaryText={record => record.category}
                            tertiaryText={record => record.date}
                        />
                    ) :
                    (
                        <Datagrid>
                            <TextField source="title" label="Titre de l'evenement"/>
                            <TextField source="category" label="La categorie"/>
                            <TextField source="authorId" label="Les auteurs"/>
                            <EmailField source="date" label="La date"/>
                            <ImageField source="src.original" label="Image"/>
                            <EditButton/>
                        </Datagrid>
                     )
                    }   
                </List>
            );
        }  
        
        
export function EventEdit(props){
                const classes = useStyles();    
                const configureQuill = quill => quill.getModule('toolbar').addHandler('bold', function (value) {
                this.quill.format('bold', value)
            });
            return(
                <Edit {...props}>
                <SimpleForm redirect="list">
                <ReferenceInput source="title" reference="events" 
                    label="Modifier le titre" className={classes.formField}
                    filterToQuery = {searchText => ({ title: searchText })}>
                        <TextInput optionText="title"/> 
                    </ReferenceInput>

                    <ReferenceInput source="authorId" reference="authors" 
                    label="Changer l'auteur" className={classes.formField}
                    filterToQuery = {searchText => ({ title: searchText })}>
                        <SelectInput optionText="name" /> 
                    </ReferenceInput>

                    <ReferenceInput source="category" reference="categories" 
                    label="Changer la category" className={classes.formField}
                    filterToQuery = {searchText => ({ title: searchText })}>
                        <SelectInput optionText="name" /> 
                    </ReferenceInput>


                    <ReferenceInput source="date" reference="events" 
                    label="changez la date" className={classes.formField}>
                         <DateInput source="date" />
                    </ReferenceInput>

                    <ImageInput source="src" accept="image/*.jpg,.jpeg,.gif,.png" label="" 
                    placeholder="Selectionnez une image de l'auteur" className={classes.image}>
                        <ImageField source="original"  className={classes.selectedImg}/>
                    </ImageInput>
                </SimpleForm>
            </Edit>
            )
        
}        