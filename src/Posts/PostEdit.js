import * as React from "react";
import {
    Create,SimpleForm,
    EmailField,NumberInput,AutocompleteInput,
    TextInput,ImageInput,ImageField, List,Datagrid,
    TextField,SimpleList,Edit, ReferenceInput,SelectInput,
    EditButton, BooleanInput,
} from 'react-admin';
import firebase from 'firebase'
import RichTextInput from 'ra-input-rich-text';
import { useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    required,
    minLength,
    maxLength,
    email,
} from 'react-admin';

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
  


export function PostEdit(props){
    const classes = useStyles();  
    return(
        <Edit {...props} >
        <SimpleForm>
                <ReferenceInput source="title" reference="posts" 
                    label="Modifier le titre" className={classes.formField}
                    filterToQuery = {searchText => ({ title: searchText })}>
                        <TextInput optionText="title"/> 
                    </ReferenceInput>

                    <ReferenceInput source="subtitle" reference="posts" 
                    label="Modifier le sous titre" className={classes.formField}
                    filterToQuery = {searchText => ({ title: searchText })}>
                        <TextInput optionText="subtitle"/> 
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

                    <BooleanInput source="isYearArticle"  label="Est-ce l'article de l'année?" 
                    className={classes.formField}/>

                    <ReferenceInput source="articlebody" reference="authors" 
                    label="Decrivez l'article" className={classes.formField}>
                         <RichTextInput />
                    </ReferenceInput>

                   

                    <ImageInput source="src" accept="image/*.jpg,.jpeg,.gif,.png" label="" 
                    placeholder="Selectionnez une image de l'auteur" className={classes.image}>
                        <ImageField source="src"  className={classes.selectedImg}/>
                    </ImageInput>
        </SimpleForm>
    </Edit>
    )
}