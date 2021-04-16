import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import {
    Create,SimpleForm,
    EmailField,NumberInput,AutocompleteInput,
    TextInput,ImageInput,ImageField, List,Datagrid,
    TextField,SimpleList,Edit, ReferenceInput,SelectInput,
    EditButton
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



export function AuthorCreate(props){
    const classes = useStyles();    
    const configureQuill = quill => quill.getModule('toolbar').addHandler('bold', function (value) {
      this.quill.format('bold', value)
  });
  const transform = data => ({
    ...data,
    id: `${data.name.trim()}`
});
var category = [
 {id:"medecine",name:"Medecine"},{id:"science",name:"Science"},{id:"politiques",name:"Politiques"}
]
   return(
    <Create {...props} className={classes.create} transform={transform}>
    <SimpleForm className={classes.form} redirect="list">
         <TextInput source="name" className={classes.formField} label="" placeholder="Entrez le nom de l'auteur"
         validate={validateName}/>
         <TextInput source="position" className={classes.formField} label="" placeholder="Entrez la profession"/>
         <TextInput source="email" className={classes.formField} label="" placeholder="Entrez l'email de l'auteur'"
         validation={validateEmail}/>
         <NumberInput source="phone" className={classes.formField} label="" placeholder="Entrez le numero de telephone"
         />
         <ImageInput source="src" accept="image/*.jpg,.jpeg,.gif,.png" label="" 
         placeholder="Selectionnez une image de l'auteur" className={classes.image}>
             <ImageField source="src"  className={classes.selectedImg}/>
         </ImageInput>
     </SimpleForm>
 </Create>
   )
        }

export const AuthorList = props => {
            const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
            return (
                <List {...props}>
                    {isSmall ? (
                        <SimpleList
                            primaryText={record => record.name}
                            secondaryText={record => record.profession}
                            tertiaryText={record => record.email}
                        />
                    ) :
                    (
                        <Datagrid>
                            <TextField source="name" label="Nom de l'auteur"/>
                            <TextField source="position" label="Profession"/>
                            <TextField source="phone" label="Numero Tel."/>
                            <EmailField source="email" label="Email"/>
                            <ImageField source="src.src" label="Image"/>
                            <EditButton/>
                        </Datagrid>
                     )
                    }   
                </List>
            );
        }  
        
        
export function AuthorEdit(props){
                const classes = useStyles();    
                const configureQuill = quill => quill.getModule('toolbar').addHandler('bold', function (value) {
                this.quill.format('bold', value)
            });
            return(
                <Edit {...props}>
                <SimpleForm redirect="list">
                <ReferenceInput source="name" reference="authors" 
                    label="Nom de l'auteur" className={classes.formField}
                    filterToQuery = {searchText => ({ title: searchText })}
                    >
                        <TextInput optionText="name"/> 
                    </ReferenceInput>
                    <ReferenceInput source="position" reference="authors" 
                    label="Profession" className={classes.formField}
                    filterToQuery = {searchText => ({ title: searchText })}
                    >
                        <TextInput optionText="position" /> 
                    </ReferenceInput>
                    <ReferenceInput source="email" reference="authors" 
                    label="Email" className={classes.formField}
                    filterToQuery = {searchText => ({ title: searchText })}
                    >
                        <TextInput optionText="email" /> 
                    </ReferenceInput>
                    <ReferenceInput source="phone" reference="authors" 
                    label="Phone" className={classes.formField}
                    filterToQuery = {searchText => ({ title: searchText })}
                    >
                        <TextInput optionText="phone" /> 
                    </ReferenceInput>

                    <ImageInput source="src" accept="image/*.jpg,.jpeg,.gif,.png" label="" 
                    placeholder="Selectionnez une image de l'auteur" className={classes.image}>
                        <ImageField source="src"  className={classes.selectedImg}/>
                    </ImageInput>
                </SimpleForm>
            </Edit>
            )
        
}        