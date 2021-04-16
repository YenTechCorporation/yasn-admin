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
   
  }));



export function CategoryCreate(props){
    const classes = useStyles();    
    
  const transform = data => ({
    ...data,
    id: `${data.name.trim()}`
});

   return(
    <Create {...props} className={classes.create} transform={transform}>
    <SimpleForm className={classes.form} redirect="list">
         <TextInput source="name" className={classes.formField} label="" 
         placeholder="Entrez le nom de la categorie"
         validate={validateName}/>
     </SimpleForm>
 </Create>
   )
        }

export const CategoryList = props => {
            const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
            return (
                <List {...props}>
                    {isSmall ? (
                        <SimpleList
                            primaryText={record => record.name}
                        />
                    ) :
                    (
                        <Datagrid>
                            <TextField source="name" />
                            <EditButton/>
                        </Datagrid>
                     )
                    }   
                </List>
            );
        }  
        
        
export function CategoryEdit(props){
                const classes = useStyles();    
            return(
                <Edit {...props}>
                <SimpleForm>
                <ReferenceInput source="name" reference="categories" 
                    label="Entrez le nom de la categorie" className={classes.formField}
                    filterToQuery = {searchText => ({ title: searchText })}
                    >
                        <TextInput optionText="name"/> 
                    </ReferenceInput> 
                </SimpleForm>
            </Edit>
            )
        
}        