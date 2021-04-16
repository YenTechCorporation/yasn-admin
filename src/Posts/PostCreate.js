import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import {
    Create,SimpleForm,ChipField,AutocompleteInput,
    ReferenceInput,SelectInput,BooleanInput,ReferenceArrayInput,
    TextInput,Filter,ImageInput,ImageField, SelectArrayInput,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
import { TrendingUpRounded } from "@material-ui/icons";

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




export function PostCreate(props){
    const classes = useStyles();
    const configureQuill = quill => quill.getModule('toolbar').addHandler('bold', function (value) {
      this.quill.format('bold', value)
  });
  
  const transform = data => ({
    ...data,
    id: `${data.title}`
}); 

var category = [
 {id:"medecine",name:"Medecine"},{id:"science",name:"Science"},{id:"politiques",name:"Politiques"}
]
   return(
    <Create {...props} className={classes.create} transform={transform}>
    <SimpleForm className={classes.form} redirect="list">
         <TextInput source="title" className={classes.formField} label="" placeholder="Entrez le titre de l'article"/>
         {/* <TextInput source="subtitle" className={classes.formField} label="" placeholder="Entrez le sous titre"/>
          */}
         <ReferenceInput source="authorId" 
         reference="authors" label="Selectionnez l'auteur" 
         className={classes.formField}
         filterToQuery = {searchText => ({ title: searchText })}
         >
           <AutocompleteInput optionText="id" />   
         </ReferenceInput>
         <ReferenceInput source="category" reference="categories" 
         label="Selectionnez la categorie" className={classes.formField}
         filterToQuery = {searchText => ({ title: searchText })}
         >
              <AutocompleteInput optionText="name" label=" "/> 
         </ReferenceInput>
         <BooleanInput defaultValue = {false} source="isYearArticle"  label="Est-ce l'article de l'année?" className={classes.formField}/>
         <RichTextInput source="articlebody" 
         className={classes.form}
         label="Decrivez l'article" 
         placeholder="Decrivez l'article" 
            configureQuill={configureQuill}
         />
         <ImageInput source="src" accept="image/*.jpg,.jpeg,.gif,.png" label="" 
         placeholder="Selectionnez une image de l'article" className={classes.image}>
             <ImageField source="src"  className={classes.selectedImg}/>
         </ImageInput>
     </SimpleForm>
 </Create>
   )
        }